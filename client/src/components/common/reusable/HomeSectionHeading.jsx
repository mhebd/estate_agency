import React from 'react';
import { Link } from 'react-router-dom';

function HomeSectionHeading({ title, linkText, link }) {
  return (
    <div className="section-header clearfix">
      <h2 className="heading float-left">{title}</h2>
      {link && (
        <h3 className="more-properties float-right">
          <Link to={link} className="link">
            All {linkText} <i className="fas fa-angle-right ml-3" />
          </Link>
        </h3>
      )}
    </div>
  );
}

export default HomeSectionHeading;
