import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../../../assets/css/property-grid.css';
import PropertyCard from '../../common/reusable/PropertyCard';

function Property() {
  const [properties, setProperties] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const res = await axios(`http://localhost:5000/api/v1/property`);
      setProperties(res.data.result.data);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <div className="property-grid-section">
        <div className="container">
          <div className="property-grid-header">
            <div className="row">
              <div className="col-lg-8 mb-4">
                <div className="header">
                  <h2 className="heading">Our Amazing Properties</h2>
                  <p className="header-prg">Grid Properties</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="breadcrumb-wrapper justify-content-end">
                  <ul className="breadcrumb justify-content-start justify-content-lg-end">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Properties Grid</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="select-proerty clearfix">
            <div className="form-group float-right">
              <select name="" id="" className="form-control">
                <option value="">All</option>
                <option value="">One</option>
                <option value="">Two</option>
                <option value="">Three</option>
              </select>
            </div>
          </div>

          <div className="grid-properties">
            <div className="row">
              {properties &&
                properties?.map((property) => (
                  <div className="col-md-4 mb-4">
                    <PropertyCard property={property} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid-pagination clearfix my-5">
          <ul className="pagination float-right">
            <li className="page-item">
              <a href="/" className="page-link">
                <i className="fas fa-angle-left" />
              </a>
            </li>
            <li className="page-item">
              <a href="/" className="page-link">
                1
              </a>
            </li>
            <li className="page-item">
              <a href="/" className="page-link">
                2
              </a>
            </li>
            <li className="page-item">
              <a href="/" className="page-link">
                3
              </a>
            </li>
            <li className="page-item">
              <a href="/" className="page-link">
                4
              </a>
            </li>
            <li className="page-item">
              <a href="/" className="page-link">
                5
              </a>
            </li>
            <li className="page-item">
              <a href="/" className="page-link">
                <i className="fas fa-angle-right" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Property;
