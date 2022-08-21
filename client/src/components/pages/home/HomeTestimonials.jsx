import React from 'react';

function HomeTestimonials() {
  return (
    <div className="section testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="heading">Testimonials</h2>
        </div>

        <div className="testimonials-slider">
          <div className="owl-carousel owl-theme testimonial">
            <div className="item">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <img src="../image/proparty-img/testimonial-2.jpg" alt="" className="img-fluid" />
                </div>

                <div className="col-md-6 mb-4">
                  <div className="icon text-center mb-4">
                    <i className="fas fa-quote-right" />
                  </div>
                  <div className="jumbotron mb-4">
                    <p className="font-italic lead quote">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo quas
                      laborum. Corporis ex accusantium atque delectus vero corrupti ullam cum
                      incidunt est?
                    </p>
                  </div>

                  <div className="media">
                    <img
                      src="../image/proparty-img/mini-testimonial-2.jpg"
                      alt=""
                      className="media-img"
                    />
                    <div className="media-body">
                      <h3 className="media-name">Pablo & Emma</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* {{<!-- item one end -->}} */}
            <div className="item">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <img src="../image/proparty-img/testimonial-1.jpg" alt="" className="img-fluid" />
                </div>

                <div className="col-md-6 mb-4">
                  <div className="icon text-center mb-4">
                    <i className="fas fa-quote-right" />
                  </div>
                  <div className="jumbotron mb-4">
                    <p className="text-italic lead quote">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo quas
                      recusandae quibusdam molestias dolorum repudiandae est mollitia laborum.
                      Corporis ex accusantium atque delectus vero corrupti ullam cum incidunt est?
                    </p>
                  </div>

                  <div className="media">
                    <img
                      src="../image/proparty-img/mini-testimonial-1.jpg"
                      alt=""
                      className="media-img"
                    />
                    <div className="media-body">
                      <h3 className="media-name">Elbart & Erika</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* {{<!-- item one end -->}} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeTestimonials;
