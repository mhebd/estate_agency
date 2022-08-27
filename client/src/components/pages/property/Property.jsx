import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../../../assets/css/property-grid.css';
import PageHeader from '../../common/reusable/PageHeader';
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
          <PageHeader heading="Our Amazing Properties" page="property" />

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
