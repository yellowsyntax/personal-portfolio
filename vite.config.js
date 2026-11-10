import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { sendContactEmail } from "./server/sendContactEmail.js";

function contactApiPlugin(env) {
  return {
    name: "contact-api",
    configureServer(server) {
      server.middlewares.use("/api/contact", (req, res, next) => {
        if (req.method === "OPTIONS") {
          res.statusCode = 204;
          res.end();
          return;
        }

        if (req.method !== "POST") {
          next();
          return;
        }

        let raw = "";
        req.on("data", (chunk) => {
          raw += chunk;
        });

        req.on("end", async () => {
          try {
            const payload = JSON.parse(raw || "{}");
            const result = await sendContactEmail({
              ...payload,
              env: {
                RESEND_API_KEY: env.RESEND_API_KEY,
                CONTACT_TO_EMAIL: env.CONTACT_TO_EMAIL,
                RESEND_FROM: env.RESEND_FROM,
              },
            });

            res.statusCode = result.status;
            res.setHeader("Content-Type", "application/json");
            res.end(
              JSON.stringify(
                result.ok ? { ok: true } : { error: result.error || "Request failed" }
              )
            );
          } catch (error) {
            console.error("Local contact API error:", error);
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ error: "Unexpected server error" }));
          }
        });
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), contactApiPlugin(env)],
    assetsInclude: ["**/*.glb"],
  };
});
