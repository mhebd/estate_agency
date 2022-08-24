/* eslint-disable react/jsx-props-no-spreading */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import PropertyCard from '../../common/reusable/PropertyCard';

function HomePropertySlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
  };
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
        <div className="section-header clearfix">
          <h2 className="heading float-left">Latest Properties</h2>
          <h3 className="more-properties float-right">
            <a href="property-gride.html" className="link">
              All Property <i className="fas fa-angle-right ml-3" />
            </a>
          </h3>
        </div>
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
