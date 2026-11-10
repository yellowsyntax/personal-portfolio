import { useRef, useState } from "react";

import useAlert from "../hooks/useAlert";
import { Alert } from "../components";
import { site } from "../constants";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      showAlert({
        show: true,
        text: "Thank you for your message — I’ll reply soon.",
        type: "success",
      });

      setTimeout(() => {
        hideAlert(false);
        setForm({
          name: "",
          email: "",
          message: "",
        });
      }, 3000);
    } catch (error) {
      console.error(error);
      showAlert({
        show: true,
        text: "Something went wrong — please try again or email me directly.",
        type: "danger",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='contact-page'>
      {alert.show && <Alert {...alert} />}

      <section className='contact-hero'>
        <div
          className='contact-hero__media'
          style={{ backgroundImage: `url(${site.contactHero.image})` }}
          aria-hidden='true'
        />
        <div className='contact-hero__veil' aria-hidden='true' />

        <p className='contact-watermark contact-watermark--top' aria-hidden='true'>
          {site.brand}
        </p>
        <p
          className='contact-watermark contact-watermark--bottom'
          aria-hidden='true'
        >
          {site.contactHero.watermark}
        </p>

        <div className='contact-hero__stage'>
          <div className='contact-hero__copy'>
            <p className='contact-kicker'>{site.contactHero.kicker}</p>
            <h1 className='contact-headline'>
              <span>{site.contactHero.headline[0]}</span>
              <span>{site.contactHero.headline[1]}</span>
            </h1>
          </div>

          <p className='contact-tagline'>{site.contactHero.tagline}</p>
        </div>
      </section>

      <section className='contact-below'>
        <div className='contact-below__inner'>
          <header className='contact-band'>
            <h2 className='contact-section-title'>
              Get in <span className='contact-mint'>Touch</span>
            </h2>
            <p className='contact-intro'>
              Tell me what you&apos;re building. I usually reply within a day or
              two.
            </p>
          </header>

          <div className='contact-layout'>
            <aside className='contact-meta'>
              <p className='contact-meta__label'>Email</p>
              <a className='contact-meta__value' href={`mailto:${site.email}`}>
                {site.email}
              </a>

              <p className='contact-meta__label'>Phone</p>
              <a
                className='contact-meta__value'
                href={`tel:${site.phone.replace(/\s+/g, "")}`}
              >
                {site.phone}
              </a>

              <p className='contact-meta__label'>Based in</p>
              <p className='contact-meta__value contact-meta__value--plain'>
                {site.location}
              </p>
            </aside>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className='contact-form'
            >
              <label className='contact-field'>
                <span>Name</span>
                <input
                  type='text'
                  name='name'
                  placeholder='Your name'
                  required
                  value={form.name}
                  onChange={handleChange}
                />
              </label>

              <label className='contact-field'>
                <span>Email</span>
                <input
                  type='email'
                  name='email'
                  placeholder='you@email.com'
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </label>

              <label className='contact-field'>
                <span>Message</span>
                <textarea
                  name='message'
                  rows='5'
                  placeholder='What should we build?'
                  required
                  value={form.message}
                  onChange={handleChange}
                />
              </label>

              <button type='submit' disabled={loading} className='contact-submit'>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
