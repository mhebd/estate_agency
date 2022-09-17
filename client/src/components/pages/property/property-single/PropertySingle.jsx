/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-props-no-spreading */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import '../../../../assets/css/property-single.css';
import sliderSettings from '../../../../utils/sliderSettings';
import AgentInfo from '../../../common/reusable/AgentInfo';
import Loading from '../../../common/reusable/Loading';
import PageHeader from '../../../common/reusable/PageHeader';
import PropertySummary from './PropertySummary';

function PropertySingle() {
  const settings = sliderSettings();

  const [property, setProperty] = useState({});
  const [loading, setLoading] = useState(false);
  const { propertyId } = useParams();

  const { name, images, description, summary, price, amenities, floorPlans, agent } = property;
  console.log(agent);
  useEffect(() => {
    setLoading(true);
    (async () => {
      const res = await axios(`/api/v1/property/${propertyId}`);
      setProperty(res.data.result.data);
      setLoading(false);
    })();
  }, [propertyId]);

  if (loading) {
    return <Loading />;
  }
  return (
    Object.keys(property).length > 0 && (
      <div className="property-single-section">
        <div className="container">
          <PageHeader heading={name} page="property" title={name} />

          <div className="property-single-carousel mb-5 pb-5">
            <div className="carousel-wrapper">
              <div className="ps-carousel">
                <Slider {...settings}>
                  {images &&
                    images.map((img) => (
                      <div className="item">
                        <img
                          src={`../${img}`}
                          alt=""
                          className="img-fluid"
                          style={{ width: '100%', maxHeight: '500px' }}
                        />
                      </div>
                    ))}
                </Slider>
              </div>
            </div>
          </div>

          <div className="property-description">
            <div className="row">
              <div className="col-lg-4 mb-4">
                <div className="property-rent  d-flex justify-content-center aligns-item-center">
                  <div className="rent-icon">
                    <i className="fas fa-dollar-sign" />
                  </div>
                  <div className="rent-amount align-self-center">
                    <h2 className="amount">{price}</h2>
                  </div>
                </div>

                <PropertySummary summary={summary} />
              </div>
              <div className="col-lg-1" />
              <div className="col-lg-7 mb-">
                <div className="description">
                  <div className="description-header mb-5">
                    <h2 className="heading">Property Description</h2>
                    <div className="h-border-bottom" />
                  </div>
                  <div
                    className="desc-prg mb-5"
                    dangerouslySetInnerHTML={{ __html: description }}
                  />

                  <div className="others-pro-info">
                    <div className="others-pro-info-header mb-5">
                      <h3 className="heading">Amenities</h3>
                      <div className="h-border-bottom" />
                    </div>

                    <ul className="others-list list-unstyled">
                      {amenities &&
                        amenities.map((item) => (
                          <li key={Math.random()} className="list-item">
                            {item}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="property-display-nav mb-5">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a href="#video" className="nav-link active" data-toggle="tab">
                      Video
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#plane" className="nav-link" data-toggle="tab">
                      Floor Plans
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#map" className="nav-link" data-toggle="tab">
                      Ubication
                    </a>
                  </li>
                </ul>

                <div className="tab-content">
                  <div className="tab-pane active show" id="video">
                    <div className="video">
                      {/* <iframe
                      width="100%"
                      height="450"
                      src="https://www.youtube.com/embed/JN-eXmzVoGA"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    /> */}
                    </div>
                  </div>
                  <div className="tab-pane" id="plane">
                    <img src={floorPlans} alt="" className="img-fluid" />
                  </div>
                  <div className="tab-pane" id="map">
                    <div className="location-map">
                      {/* <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14591.598426753706!2d89.1142072697754!3d23.893178400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1564312375838!5m2!1sen!2sbd"
                      width="100%"
                      height="450"
                      frameBorder="0"
                      style="border:0"
                      allowFullScreen
                    /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-agent-wrapper">
            <div className="ca-header mb-5">
              <h2 className="heading">Contact Agent</h2>
              <div className="h-border-bottom" />
            </div>
            <div className="row">
              <div className="col-lg-8 mb-4">
                <AgentInfo agent={agent} />
              </div>

              <div className="col-lg-4 mb-4">
                <div className="agent-message-form">
                  <form action="">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control" placeholder="Eamil" />
                    </div>
                    <div className="form-group">
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        className="form-control"
                        placeholder="Comment"
                      />
                    </div>
                    <button type="button" className="btn btn-dark am-btn">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default PropertySingle;
