/* eslint-disable react/jsx-props-no-spreading */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import sliderSettings from '../../../utils/sliderSettings';
import HomeSectionHeading from '../../common/reusable/HomeSectionHeading';
import PropertyCard from '../../common/reusable/PropertyCard';

function HomePropertySlider() {
  const settings = sliderSettings(3, 1, true);
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
    <div className="section property-carousel-wrapper">
      <div className="container">
        <HomeSectionHeading title="Latest Properties" link="/property" />
        <div className="slider-wrapper">
          {/* <!-- carousel start --> */}
          <div className="property-carousel">
            <Slider {...settings}>
              {properties && properties?.map((property) => <PropertyCard property={property} />)}
            </Slider>
          </div>

          {/* <!-- carousel end --> */}
        </div>
      </div>
    </div>
  );
}

export default HomePropertySlider;
