/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link } from 'react-router-dom';

function PropertyCard({
  property: {
    name,
    price,
    images,
    _id,
    summary: { bath, beds, garage, area },
  },
}) {
  return (
    <div className="item px-2" key={Math.random()}>
      <div className="single-property">
        <div className="card">
          <img src={`./../${images[1]}`} alt="" className="card-img" />

          <div className="property-caption">
            <div className="information">
              <h2 className="address">{name}</h2>
              <h4 className="rent">RENT | $ {price}</h4>
              <Link to={`/property/${_id}`} className="link">
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
                        {area}m<sup>2</sup>
                      </td>
                      <td>{beds}</td>
                      <td>{bath}</td>
                      <td>{garage}</td>
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
