import React from 'react';
import '../../../assets/css/property-grid.css';
import Properties from '../../common/reusable/Properties';

function Property() {
  return <Properties url="/api/v1/property" pageHeading />;
}

export default Property;
