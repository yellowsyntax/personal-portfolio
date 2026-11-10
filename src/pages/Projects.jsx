import { useEffect } from "react";
import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects, site } from "../constants";

const Projects = () => {
  useEffect(() => {
    const nodes = document.querySelectorAll(".projects-reveal");
    if (!nodes.length) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -6% 0px" }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div className='projects-page'>
      <section className='projects-hero'>
        <div
          className='projects-hero__media'
          style={{ backgroundImage: `url(${site.projectsHero.image})` }}
          aria-hidden='true'
        />
        <div className='projects-hero__veil' aria-hidden='true' />

        <p className='projects-watermark projects-watermark--top' aria-hidden='true'>
          {site.brand}
        </p>
        <p
          className='projects-watermark projects-watermark--bottom'
          aria-hidden='true'
        >
          marine
        </p>

        <div className='projects-hero__stage'>
          <div className='projects-hero__copy'>
            <p className='projects-kicker'>{site.projectsHero.kicker}</p>
            <h1 className='projects-headline'>
              <span>{site.projectsHero.headline[0]}</span>
              <span>{site.projectsHero.headline[1]}</span>
            </h1>
          </div>

          <p className='projects-tagline'>{site.projectsHero.tagline}</p>
        </div>
      </section>

      <section className='projects-below'>
        <div className='projects-below__inner'>
          <header className='projects-band'>
            <h2 className='projects-section-title'>
              My <span className='projects-mint'>Projects</span>
            </h2>
            <p className='projects-intro'>
              Selected work across healthcare AI, claims systems, delivery
              logistics, CCTV analytics, pharmacy POS, personal tools, and IT
              tooling — systems I&apos;ve built, deployed, and supported.
            </p>
          </header>

          <div className='projects-grid'>
            {projects.map((project, index) => {
              const isLive = project.status === "live" && Boolean(project.url);
              const indexLabel = String(index + 1).padStart(2, "0");

              return (
                <article
                  className='projects-item projects-reveal'
                  key={project.name}
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <div className='projects-item__top'>
                    <span className='projects-item__index'>{indexLabel}</span>
                    <span
                      className={`projects-item__status projects-item__status--${
                        isLive ? "live" : "private"
                      }`}
                    >
                      {isLive ? "Live" : "Private"}
                    </span>
                  </div>

                  <h3 className='projects-item__title'>{project.name}</h3>
                  <p className='projects-item__desc'>{project.description}</p>

                  {isLive ? (
                    <a
                      className='projects-item__link'
                      href={project.url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Visit Site ↗
                    </a>
                  ) : (
                    <Link className='projects-item__link' to='/contact'>
                      Request a Demo →
                    </Link>
                  )}
                </article>
              );
            })}
          </div>

          <div className='projects-cta'>
            <CTA />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
