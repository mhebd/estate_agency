/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link } from 'react-router-dom';

function PropertyCard({ property }) {
  return (
    <div className="item px-2" key={Math.random()}>
      <div className="single-property">
        <div className="card">
          <img src={`http://localhost:5000/${property.images[1]}`} alt="" className="card-img" />

          <div className="property-caption">
            <div className="information">
              <h2 className="address">{property.name}</h2>
              <h4 className="rent">RENT | $ {property.price}</h4>
              <Link to={`/property/${property._id}`} className="link">
                Click here to view
                <i className="fas fa-angle-right ml-3" />
              </Link>
            </div>

            <div className="extra-info">
              <div className="info-table">
                <table className="table bg-success">
                  <thead>
                    <tr>
                      <th>Area</th>
                      <th>Beds</th>
                      <th>Baths</th>
                      <th>Garages</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        340m<sup>2</sup>
                      </td>
                      <td>2</td>
                      <td>4</td>
                      <td>1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
