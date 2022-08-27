import React from 'react';
import { Link } from 'react-router-dom';

function PageHeader({ heading, page, title }) {
  return (
    <div className="agent-single-header mb-5">
      <div className="row">
        <div className="col-lg-8 mb-4">
          <div className="header">
            <h2 className="heading">{heading}</h2>
            <p className="header-prg">
              {title && 'Singel'} {page} Page
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="breadcrumb-wrapper justify-content-end">
            <ul className="breadcrumb justify-content-start justify-content-lg-end">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to={`/${page}`}>{page}</Link>
              </li>
              {title && <li className="breadcrumb-item active">{title} </li>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
