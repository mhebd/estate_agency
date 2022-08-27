/* eslint-disable react/jsx-props-no-spreading */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import '../../../../assets/css/property-single.css';
import sliderSettings from '../../../../utils/sliderSettings';
import PageHeader from '../../../common/reusable/PageHeader';

function PropertySingle() {
  const settings = sliderSettings();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(false);
  const { propertyId } = useParams();

  useEffect(() => {
    setLoading(true);
    (async () => {
      const res = await axios(`http://localhost:5000/api/v1/property/${propertyId}`);
      setProperty(res.data.result.data);
      setLoading(false);
    })();
  }, [propertyId]);

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    property && (
      <div className="property-single-section">
        <div className="container">
          <PageHeader heading={property.name} page="property" title={property.name} />

          <div className="property-single-carousel mb-5">
            <div className="carousel-wrapper">
              <div className="ps-carousel">
                <Slider {...settings}>
                  {property?.images &&
                    property.images.map((img) => (
                      <div className="item">
                        <img
                          src={`http://localhost:5000/${img}`}
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
                    <h2 className="amount">15000</h2>
                  </div>
                </div>

                <div className="property-summery">
                  <div className="summery-header mb-5">
                    <h2 className="heading">Quick Summary</h2>
                    <div className="h-border-bottom" />
                  </div>
                  <div className="summery-list">
                    <ul className="list-group list-unstyled">
                      <li className="list-item clearfix">
                        <strong className="float-left">Property ID:</strong>{' '}
                        <span className="float-right">1134</span>
                      </li>
                      <li className="list-item clearfix">
                        <strong className="float-left">Location:</strong>{' '}
                        <span className="float-right">Chicago, IL 606543</span>
                      </li>
                      <li className="list-item clearfix">
                        <strong className="float-left">Property Type:</strong>{' '}
                        <span className="float-right">House</span>
                      </li>
                      <li className="list-item clearfix">
                        <strong className="float-left">Status:</strong>{' '}
                        <span className="float-right">Sale</span>
                      </li>
                      <li className="list-item clearfix">
                        <strong className="float-left">Area:</strong>{' '}
                        <span className="float-right">
                          340m<sup>2</sup>
                        </span>
                      </li>
                      <li className="list-item clearfix">
                        <strong className="float-left">Beds:</strong>{' '}
                        <span className="float-right">4</span>
                      </li>
                      <li className="list-item clearfix">
                        <strong className="float-left">Baths:</strong>{' '}
                        <span className="float-right">2</span>
                      </li>
                      <li className="list-item clearfix">
                        <strong className="float-left">Garage:</strong>{' '}
                        <span className="float-right">1</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-1" />
              <div className="col-lg-7 mb-">
                <div className="description">
                  <div className="description-header mb-5">
                    <h2 className="heading">Property Description</h2>
                    <div className="h-border-bottom" />
                  </div>
                  <div className="desc-prg mb-5">
                    <p className="">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, dolorum? Nisi
                      maxime ipsa non eaque, nulla amet consectetur adipisicing elit. Fuga nesciunt
                      voluptatem excepturi alias commodi eligendi optio nemo cumque sequi, ipsam
                      mollitia officia, itaque incidunt aperiam modi. Dolores perspiciatis amet
                      impedit!
                    </p>

                    <p className="">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate molestias
                      cupiditate nihil pariatur sed doloribus facilis id eum deserunt! Nulla minima
                      omnis rem ut facere molestiae beatae dolorum. Non, aut?
                    </p>
                  </div>

                  <div className="others-pro-info">
                    <div className="others-pro-info-header mb-5">
                      <h3 className="heading">Amenities</h3>
                      <div className="h-border-bottom" />
                    </div>

                    <ul className="others-list list-unstyled">
                      <li className="list-item">Balcony</li>
                      <li className="list-item">Outdoor Kitchen</li>
                      <li className="list-item">Cable Tv</li>
                      <li className="list-item">Deck</li>
                      <li className="list-item">Tennis Courts</li>
                      <li className="list-item">Internet</li>
                      <li className="list-item">Parking</li>
                      <li className="list-item">Sun Room</li>
                      <li className="list-item">Concrete Flooring</li>
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
                    <img src="../image/proparty-img/plan2.jpg" alt="" className="img-fluid" />
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
              <div className="col-lg-4 mb-4">
                <div className="agent-picture">
                  <img src="../image/proparty-img/agent-4.jpg" alt="" className="img-fluid" />
                </div>
              </div>

              <div className="col-lg-4 mb-4">
                <div className="about-agent">
                  <div className="agent-name">
                    <h2 className="name">Anabella Geller</h2>
                  </div>
                  <div className="agent-prg">
                    <p className="lead">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis qui
                      fugiat soluta omnis optio deserunt hic nostrum iusto dolorem dolor aliquam
                      eveniet enim, nemo numquam, cupiditate odio eaque ea. Labore.
                    </p>
                  </div>

                  <div className="agent-others-info">
                    <ul className="list-group list-unstyled">
                      <li className="list-item">
                        <strong className="float-left">Phone:</strong>{' '}
                        <span className="float-right">(222) 4568932</span>
                      </li>
                      <li className="list-item">
                        <strong className="float-left">Mobile:</strong>{' '}
                        <span className="float-right">777 287 378 737</span>
                      </li>
                      <li className="list-item">
                        <strong className="float-left">Email:</strong>{' '}
                        <span className="float-right">annabella@example.com</span>
                      </li>
                      <li className="list-item">
                        <strong className="float-left">Skype:</strong>{' '}
                        <span className="float-right">Annabela.ge</span>
                      </li>
                    </ul>
                  </div>

                  <div className="agent-social-icon">
                    <ul className="nav justify-content-center">
                      <li className="nav-item">
                        <a href="/" className="nav-link">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/" className="nav-link">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/" className="nav-link">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/" className="nav-link">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/" className="nav-link">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
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
