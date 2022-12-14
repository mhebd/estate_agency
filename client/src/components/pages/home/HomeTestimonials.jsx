/* eslint-disable react/jsx-props-no-spreading */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import sliderSettings from '../../../utils/sliderSettings';
import HomeSectionHeading from '../../common/reusable/HomeSectionHeading';
import Loading from '../../common/reusable/Loading';

function HomeTestimonials() {
  const settings = sliderSettings();
  const [testimonials, setTestimonials] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const res = await axios(`/api/v1/testimonial`);
      setTestimonials(res.data.result.data);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="section testimonials">
      <div className="container">
        <HomeSectionHeading title="Testimonials" />

        <div className="testimonials-slider">
          <div className="owl-carousel owl-theme testimonial">
            <Slider {...settings}>
              {testimonials &&
                testimonials.map((testimonial) => (
                  <div className="item" key={Math.random()}>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <img src={`/${testimonial.avatar}`} alt="" className="img-fluid" />
                      </div>

                      <div className="col-md-6 mb-4">
                        <div className="icon text-center mb-4">
                          <i className="fas fa-quote-right" />
                        </div>
                        <div className="jumbotron mb-4">
                          <p className="font-italic lead quote">{testimonial.opinion}</p>
                        </div>

                        <div className="media">
                          <img src={`/${testimonial.avatar}`} alt="" className="media-img" />
                          <div className="media-body">
                            <h3 className="media-name">{testimonial.name}</h3>
                          </div>
                        </div>
                      </div>
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

export default HomeTestimonials;
