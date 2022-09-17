import React from 'react';

function PropertySummary({
  summary: { propertyId, location, propertyType, status, area, beds, bath, garage },
}) {
  return (
    <div className="property-summery">
      <div className="summery-header mb-5">
        <h2 className="heading">Quick Summary</h2>
        <div className="h-border-bottom" />
      </div>
      <div className="summery-list">
        <ul className="list-group list-unstyled">
          <li className="list-item clearfix">
            <strong className="float-left">Property ID:</strong>{' '}
            <span className="float-right">{propertyId}</span>
          </li>
          <li className="list-item clearfix">
            <strong className="float-left">Location:</strong>{' '}
            <span className="float-right">{location}</span>
          </li>
          <li className="list-item clearfix">
            <strong className="float-left">Property Type:</strong>{' '}
            <span className="float-right">{propertyType}</span>
          </li>
          <li className="list-item clearfix">
            <strong className="float-left">Status:</strong>{' '}
            <span className="float-right">{status}</span>
          </li>
          <li className="list-item clearfix">
            <strong className="float-left">Area:</strong>{' '}
            <span className="float-right">
              {area}m<sup>2</sup>
            </span>
          </li>
          <li className="list-item clearfix">
            <strong className="float-left">Beds:</strong>{' '}
            <span className="float-right">{beds}</span>
          </li>
          <li className="list-item clearfix">
            <strong className="float-left">Baths:</strong>{' '}
            <span className="float-right">{bath}</span>
          </li>
          <li className="list-item clearfix">
            <strong className="float-left">Garage:</strong>{' '}
            <span className="float-right">{garage}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PropertySummary;
