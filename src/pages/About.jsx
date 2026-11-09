import { useEffect } from "react";
import { Link } from "react-router-dom";

import { CTA } from "../components";
import {
  certifications,
  education,
  experiences,
  site,
  skillGroups,
} from "../constants";

const Asterisk = ({ className = "" }) => (
  <svg
    className={`ed-asterisk ${className}`.trim()}
    width='18'
    height='18'
    viewBox='0 0 18 18'
    fill='none'
    aria-hidden='true'
  >
    <path
      d='M9 1.5v15M2.5 9h13M3.8 3.8l10.4 10.4M14.2 3.8L3.8 14.2'
      stroke='currentColor'
      strokeWidth='1.2'
      strokeLinecap='round'
    />
  </svg>
);

const skillLayout = {
  leftTop: "Backend & APIs",
  leftBottom: "Cloud & DevOps",
  rightTop: "AI / Computer Vision",
  rightBottom: "Networking & IT",
};

const getGroup = (title) => skillGroups.find((group) => group.title === title);

const SkillCell = ({ title, align = "left", corner = "left" }) => {
  const group = getGroup(title);
  if (!group) return null;

  return (
    <div className={`ed-skill-cell ed-skill-cell--${align}`}>
      <Asterisk className={`ed-asterisk--${corner}`} />
      <h3 className='ed-skill-cell__title'>{group.title}</h3>
      <div className='ed-tags'>
        {group.items.map((item) => (
          <span className='ed-tag' key={item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const About = () => {
  useEffect(() => {
    const nodes = document.querySelectorAll(".about-reveal");
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
    <div className='agency-page'>
      <section className='agency-hero'>
        <div
          className='agency-hero__media'
          style={{ backgroundImage: `url(${site.recentWork.image})` }}
          aria-hidden='true'
        />
        <div className='agency-hero__veil' aria-hidden='true' />

        <p className='agency-watermark agency-watermark--top' aria-hidden='true'>
          {site.brand}
        </p>
        <p className='agency-watermark agency-watermark--bottom' aria-hidden='true'>
          {site.brand}
        </p>

        <div className='agency-hero__stage'>
          <div className='agency-hero__copy'>
            <p className='agency-kicker'>
              {site.name} · {site.title}
            </p>
            <h1 className='agency-headline'>
              <span>{site.headline[0]}</span>
              <span>{site.headline[1]}</span>
            </h1>
          </div>

          <ul className='agency-services'>
            {site.services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>

          <a
            href={site.recentWork.link}
            target='_blank'
            rel='noreferrer'
            className='agency-recent'
          >
            <img src={site.recentWork.image} alt={site.recentWork.name} />
            <div>
              <p>{site.recentWork.label}</p>
              <strong>{site.recentWork.name}</strong>
            </div>
          </a>

          <p className='agency-tagline'>{site.tagline}</p>

          <Link to={site.cta.link} className='agency-cta'>
            <span>{site.cta.label}</span>
            <span className='agency-cta__plus' aria-hidden='true'>
              +
            </span>
          </Link>
        </div>
      </section>

      <section className='about-below'>
        <div className='about-below__inner'>
          <article className='ed-section about-reveal'>
            <header className='ed-band ed-band--split'>
              <h2 className='ed-title'>About Me</h2>
              <p className='ed-band__meta'>
                Software Engineer &amp; IT Officer · Ghana
              </p>
            </header>

            <div className='ed-about-grid'>
              <div className='ed-about-lead'>
                <p>
                  <span className='ed-mint'>Full-stack software engineer</span>{" "}
                  and IT professional with{" "}
                  <span className='ed-mint'>4+ years</span> building, deploying,
                  and supporting production systems. Based in Ga East, Ghana.
                </p>
              </div>
              <div className='ed-about-body'>
                <p>
                  I combine backend and AI engineering (Python, FastAPI, computer
                  vision, retrieval-based AI) with cloud and infrastructure (AWS,
                  Docker, Terraform, Nginx, Linux) and hands-on IT operations as
                  a sole IT officer. AWS Certified Cloud Practitioner.
                </p>
              </div>
            </div>

            <div className='ed-stats'>
              <div className='ed-stat'>
                <p className='ed-stat__value'>4+</p>
                <p className='ed-stat__label'>Years Building</p>
              </div>
              <div className='ed-stat'>
                <p className='ed-stat__value'>AWS</p>
                <p className='ed-stat__label'>Certified Cloud Practitioner</p>
              </div>
              <div className='ed-stat'>
                <p className='ed-stat__value'>Sole</p>
                <p className='ed-stat__label'>IT Officer</p>
              </div>
            </div>
          </article>

          <article className='ed-section about-reveal'>
            <header className='ed-band ed-band--center'>
              <h2 className='ed-title'>
                Skills <span className='ed-mint'>//</span> Stack{" "}
                <span className='ed-mint' aria-hidden='true'>
                  ✳
                </span>
              </h2>
            </header>

            <div className='ed-skills'>
              <div className='ed-skills__side ed-skills__side--left'>
                <SkillCell
                  title={skillLayout.leftTop}
                  align='right'
                  corner='left'
                />
                <SkillCell
                  title={skillLayout.leftBottom}
                  align='right'
                  corner='left'
                />
              </div>

              <div className='ed-skills__center'>
                <div className='ed-arch'>
                  <div className='ed-arch__caption'>
                    <p className='ed-arch__value'>4+</p>
                    <p className='ed-arch__label'>Years Shipping</p>
                  </div>
                </div>
              </div>

              <div className='ed-skills__side ed-skills__side--right'>
                <SkillCell
                  title={skillLayout.rightTop}
                  align='left'
                  corner='right'
                />
                <SkillCell
                  title={skillLayout.rightBottom}
                  align='left'
                  corner='right'
                />
              </div>
            </div>
          </article>

          <article className='ed-section about-reveal'>
            <header className='ed-band'>
              <h2 className='ed-title'>Work Experience</h2>
            </header>

            <div className='ed-experience'>
              {experiences.map((experience) => (
                <article
                  className='ed-role'
                  key={experience.company_name}
                >
                  <div className='ed-role__meta'>
                    <p className='ed-role__date'>{experience.date}</p>
                  </div>
                  <div className='ed-role__identity'>
                    <h3 className='ed-role__title'>{experience.title}</h3>
                    <p className='ed-role__company'>
                      {experience.company_name}
                    </p>
                  </div>
                  <ul className='ed-role__points'>
                    {experience.points.map((point, index) => (
                      <li key={`${experience.company_name}-${index}`}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </article>

          <article className='ed-section about-reveal'>
            <header className='ed-band'>
              <h2 className='ed-title'>
                Education <span className='ed-mint'>//</span> Cert
              </h2>
            </header>
            <div className='ed-meta'>
              <div className='ed-meta__cell'>
                <Asterisk className='ed-asterisk--left' />
                <p className='ed-label'>Education</p>
                <h3 className='ed-meta__title'>{education.degree}</h3>
                <p className='ed-meta__text'>{education.school}</p>
                <p className='ed-label ed-label--loose'>{education.date}</p>
              </div>
              <div className='ed-meta__cell'>
                <Asterisk className='ed-asterisk--right' />
                <p className='ed-label'>Certification</p>
                {certifications.map((cert) => (
                  <div key={cert.name}>
                    <h3 className='ed-meta__title'>{cert.name}</h3>
                    <p className='ed-label ed-label--loose'>
                      {cert.issuer} · {cert.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <div className='ed-section ed-cta about-reveal'>
            <CTA />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
