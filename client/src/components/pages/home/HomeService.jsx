import React from 'react';

function HomeService() {
  return (
    <div className="section services-wrapper">
      <div className="container">
        <div className="section-header">
          <h2 className="heading">Our Services</h2>
        </div>

        <div className="services">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="service wow zoomIn">
                <div className="service-header d-flex mb-4">
                  <div className="service-icon">
                    <i className="fas fa-gamepad" />
                  </div>
                  <div className="s-heading align-self-center">
                    <h2 className="">Lifestyle</h2>
                  </div>
                </div>

                <p className="service-prg lead">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint cupiditate dolor
                  vitae consequuntur accusantium impedit enim eos dolores repudiandae? Dolore
                  voluptatum commodi mollitia vel eos assumenda reprehenderit, error ipsa porro!
                </p>

                <a href="/" className="service-link">
                  Read More <i className="fas fa-angle-right" />
                </a>
              </div>
            </div>
            {/* <!-- single service end --> */}
            <div className="col-lg-4 mb-4">
              <div className="service wow zoomIn">
                <div className="service-header d-flex mb-4">
                  <div className="service-icon">
                    <i className="fas fa-dollar-sign" />
                  </div>
                  <div className="s-heading align-self-center">
                    <h2 className="">Loans</h2>
                  </div>
                </div>

                <p className="service-prg lead">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint cupiditate dolor
                  vitae consequuntur accusantium impedit enim eos dolores repudiandae? Dolore
                  voluptatum commodi mollitia vel eos assumenda reprehenderit, error ipsa porro!
                </p>

                <a href="/" className="service-link">
                  Read More <i className="fas fa-angle-right" />
                </a>
              </div>
            </div>
            {/* <!-- single service end --> */}
            <div className="col-lg-4 mb-4">
              <div className="service wow zoomIn">
                <div className="service-header d-flex mb-4">
                  <div className="service-icon">
                    <i className="fas fa-home" />
                  </div>
                  <div className="s-heading align-self-center">
                    <h2 className="">Sell</h2>
                  </div>
                </div>

                <p className="service-prg lead">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint cupiditate dolor
                  vitae consequuntur accusantium impedit enim eos dolores repudiandae? Dolore
                  voluptatum commodi mollitia vel eos assumenda reprehenderit, error ipsa porro!
                </p>

                <a href="/" className="service-link">
                  Read More <i className="fas fa-angle-right" />
                </a>
              </div>
            </div>
            {/* <!-- single service end --> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeService;
