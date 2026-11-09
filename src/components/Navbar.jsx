import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { site } from "../constants";

const links = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className='agency-nav agency-nav--global'>
      <NavLink to='/' className='agency-brand' onClick={() => setMenuOpen(false)}>
        {site.brand}
      </NavLink>

      <div className='agency-nav__right'>
        <nav className='agency-nav__links' aria-label='Primary'>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? "is-active" : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type='button'
          className={`agency-menu${menuOpen ? " is-open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls='agency-mobile-nav'
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>

      <div
        id='agency-mobile-nav'
        className={`agency-mobile${menuOpen ? " is-open" : ""}`}
        hidden={!menuOpen}
      >
        <nav className='agency-mobile__links' aria-label='Mobile'>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? "is-active" : undefined)}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
