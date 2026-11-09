import { Link } from "react-router-dom";

const stages = {
  1: {
    kicker: "Christian Oduro",
    title: "Software Engineer & IT Officer",
    body: "Building backend, AI, and cloud systems from Ghana.",
  },
  2: {
    kicker: "About",
    title: "Backend, AI, cloud & IT ops",
    body: "Systems for healthcare, security, recruitment, and logistics.",
    cta: { to: "/about", label: "Learn more" },
  },
  3: {
    kicker: "Projects",
    title: "From Expert systems to Diatel deliveries",
    body: "Curious about the work I’ve shipped?",
    cta: { to: "/projects", label: "View projects" },
  },
  4: {
    kicker: "Contact",
    title: "Need a project done?",
    body: "I’m a few keystrokes away.",
    cta: { to: "/contact", label: "Let’s talk" },
  },
};

const HomeInfo = ({ currentStage }) => {
  const stage = stages[currentStage];
  if (!stage) return null;

  return (
    <div className='island-tip'>
      <p className='island-tip__kicker'>{stage.kicker}</p>
      <h1 className='island-tip__title'>{stage.title}</h1>
      <p className='island-tip__body'>{stage.body}</p>
      {stage.cta ? (
        <Link to={stage.cta.to} className='island-tip__cta'>
          <span>{stage.cta.label}</span>
          <span aria-hidden='true'>→</span>
        </Link>
      ) : null}
    </div>
  );
};

export default HomeInfo;
