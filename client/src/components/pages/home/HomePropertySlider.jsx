/* eslint-disable react/jsx-props-no-spreading */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import sliderSettings from '../../../utils/sliderSettings';
import HomeSectionHeading from '../../common/reusable/HomeSectionHeading';
import Loading from '../../common/reusable/Loading';
import PropertyCard from '../../common/reusable/PropertyCard';

function HomePropertySlider() {
  const settings = sliderSettings(3, 1, true);
  const [properties, setProperties] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const res = await axios(`/api/v1/property?page=1&limit=6`);
      setProperties(res.data.result.data);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="section property-carousel-wrapper">
      <div className="container">
        <HomeSectionHeading title="Latest Properties" linkText="Properties" link="/property" />
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
