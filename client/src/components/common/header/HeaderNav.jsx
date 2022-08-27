import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function HeaderNav({ openSearchBox }) {
  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top top-navigation" id="top-nav">
      <div className="container">
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#mainMenu"
        >
          <i className="fas fa-bars" />
        </button>

        <div className="navbar-brand">
          <h2 className="brand-name">
            <Link to="/">
              <span className="name-left">Estate</span>
              <span className="name-right text-success">Agency</span>
            </Link>
          </h2>
        </div>

        <div className="collapse navbar-collapse" id="mainMenu">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/property"
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                Property
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/agent"
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                Agent
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                contact
              </NavLink>
            </li>
          </ul>
        </div>

        <button
          type="button"
          className="search-icon-btn btn btn-success"
          onClick={(e) => openSearchBox(e)}
        >
          <i className="fas fa-search" />
        </button>
      </div>
    </nav>
  );
}

export default HeaderNav;
