import React from 'react';
import { Link } from 'react-router-dom';

function PagesDropDownMenu() {
  return (
    <li className="nav-item">
      <Link
        className="nav-link collapsed"
        to="/"
        data-bs-toggle="collapse"
        data-bs-target="#collapsePages"
        aria-expanded="true"
        aria-controls="collapsePages"
      >
        <i className="fas fa-fw fa-folder" />
        <span>Pages</span>
      </Link>
      <div
        id="collapsePages"
        className="collapse"
        aria-labelledby="headingPages"
        data-parent="#accordionSidebar"
      >
        <div className="bg-white py-2 collapse-inner rounded">
          {/* <div className="collapse-divider" /> */}
          <h6 className="collapse-header">Other Pages:</h6>

          <Link className="collapse-item" to="/dashboard/property">
            Property
          </Link>
          <Link className="collapse-item" to="/dashboard/blog">
            Blog
          </Link>
          <Link className="collapse-item" to="/dashboard/agent">
            Agent
          </Link>
          <Link className="collapse-item" to="/dashboard/service">
            Service
          </Link>
          <Link className="collapse-item" to="/dashboard/testimonial">
            Testimonial
          </Link>
        </div>
      </div>
    </li>
  );
}

export default PagesDropDownMenu;
