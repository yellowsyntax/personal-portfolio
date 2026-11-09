import { NavLink, useLocation } from "react-router-dom";

import { site } from "../constants";

const lightRoutes = [];

const Navbar = () => {
  const { pathname } = useLocation();
  const isLight = lightRoutes.includes(pathname);

  return (
    <header
      className={`agency-nav agency-nav--global${isLight ? " agency-nav--light" : ""}`}
    >
      <NavLink to='/' className='agency-brand'>
        {site.brand}
      </NavLink>

      <div className='agency-nav__right'>
        <nav className='agency-nav__links'>
          <NavLink
            to='/about'
            className={({ isActive }) => (isActive ? "is-active" : undefined)}
          >
            About
          </NavLink>
          <NavLink
            to='/projects'
            className={({ isActive }) => (isActive ? "is-active" : undefined)}
          >
            Projects
          </NavLink>
          <NavLink
            to='/contact'
            className={({ isActive }) => (isActive ? "is-active" : undefined)}
          >
            Contact
          </NavLink>
        </nav>
        <button type='button' className='agency-menu' aria-label='Open menu'>
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
