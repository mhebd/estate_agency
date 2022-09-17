/* eslint-disable react/jsx-props-no-spreading */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import sliderSettings from '../../../utils/sliderSettings';
import Loading from '../../common/reusable/Loading';

function HomeSlider() {
  const settings = sliderSettings();
  const [properties, setProperties] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const res = await axios(`/api/v1/property?page=1&limit=4`);
      setProperties(res.data.result.data);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container-fluid">
      <div className="home-carousel-wrapper" style={{ marginTop: '-200px' }}>
        <div id="main-carousel" className="carousel slide" data-ride="carousel">
          {/* <!-- carousel inner --> */}
          <div className="carousel-inner">
            <Slider {...settings}>
              {properties &&
                properties?.map((property) => (
                  <div className="carousel-item item" key={Math.random()}>
                    <img src={`${property.images[1]}`} alt="" className="img-fluid" />

                    <div className="carousel-caption">
                      <h4 className="address mb-5 animated zoomIn delay-3s">
                        <p>Dolar,Florida</p>
                        <p>78432</p>
                      </h4>

                      <h2 className="property-name mb-5 animated zoomIn delay-2s">
                        {property.name}
                      </h2>

                      <h3 className="rent animated slideInUp delay-2s">
                        RENT | $ {property.price}
                      </h3>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSlider;
