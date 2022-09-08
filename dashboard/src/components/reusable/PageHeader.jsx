import React from 'react';
import { Link } from 'react-router-dom';

function PageHeader({ title, btnLink, btnText, icon }) {
  return (
    <div className="d-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">{title}</h1>
      <Link to={btnLink} className="d-inline-block btn btn-sm btn-primary shadow-sm">
        <i className={`fas fa-${icon} fa-sm text-white-50`} /> {btnText}
      </Link>
    </div>
  );
}

export default PageHeader;
