import React from 'react';
import '../../../assets/css/contact.css';

function Contact() {
  return (
    <>
      {' '}
      <div className="contact-wrapper">
        <div className="container">
          <div className="contact-header">
            <div className="row">
              <div className="col-lg-8 mb-4">
                <div className="header">
                  <h2 className="heading">Our Amazing Properties</h2>
                  <p className="header-prg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tempora commodi
                    cupiditate cumque illum exercitationem quos labore natus molestiae voluptatibus
                    itaque reiciendis provident suscipit unde doloremque culpa, sunt esse veniam.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="breadcrumb-wrapper justify-content-end">
                  <ul className="breadcrumb justify-content-start justify-content-lg-end">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="google-map">
            <div className="map-location">
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14591.602849238352!2d89.124247!3d23.8931392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1564259397714!5m2!1sen!2sbd"
                width="1200"
                height="500"
                frameBorder="0"
                style="border:0"
                allowFullScreen
              /> */}
            </div>
          </div>

          <div className="contact-form">
            <div className="row">
              <div className="col-lg-7 mb-4">
                <form action="">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your Name" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="email" className="form-control" placeholder="Your Email" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Subject" />
                  </div>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    className="form-control"
                    placeholder="Message"
                  />

                  <button type="button" className="btn btn-dark contact-btn">
                    Send Message
                  </button>
                </form>
              </div>

              <div className="col-lg-5">
                <div className="contact-info">
                  <div className="contact-phone clearfix">
                    <div className="mail-icon float-left">
                      <i className="fas fa-paper-plane" />
                    </div>
                    <div className="float-left">
                      <h2 className="heading">Say Hello</h2>
                      <p>
                        <strong>Email:</strong> contact@example.com
                      </p>
                      <p>
                        <strong>Phone:</strong> +54 356 945234
                      </p>
                    </div>
                  </div>
                  <div className="contact-phone clearfix">
                    <div className="location-icon float-left">
                      <i className="fas fa-map-marker" />
                    </div>
                    <div className="float-left">
                      <h2 className="heading">Find us in</h2>
                      <p>Manhattan, Nueva York 10036, EE. UU. </p>
                    </div>
                  </div>
                  <div className="contact-phone clearfix">
                    <div className="mail-icon float-left">
                      <i className="fas fa-redo" />
                    </div>
                    <div className="float-left">
                      <h2 className="heading">Social networks</h2>

                      <ul className="nav  social-nav">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
