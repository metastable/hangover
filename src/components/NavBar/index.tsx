import React from 'react';
import { Link } from 'gatsby';

interface NavBarProps {
  toggleNavbar: () => void;
  isActive: boolean;
}

const NavBar: React.FunctionComponent<NavBarProps> = ({ toggleNavbar, isActive }) => (
  <nav className="navbar is-fixed-top" aria-label="main navigation">
    <div className="navbar-brand">
      <Link to="/" className="navbar-item" />
      <button
        className={`button navbar-burger ${isActive ? 'is-active' : ''}`}
        data-target="navMenu"
        onClick={toggleNavbar}
      >
        <span />
        <span />
        <span />
      </button>
    </div>
    <div className={`navbar-menu ${isActive ? 'is-active' : ''}`} id="navMenu">
      <div className="navbar-end">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/pricing">
          Pricing
        </Link>
        <Link className="navbar-item" to="/blog">
          Blog
        </Link>
        <div className="navbar-item">
          <div className="field is-grouped">
            <p className="control">
              <Link className="button is-primary is-outlined" to="/contact">
                Contact Us
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
);
export default NavBar;
