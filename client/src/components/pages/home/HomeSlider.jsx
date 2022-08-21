import React from 'react';
import slide1 from '../../../assets/image/proparty-img/slide-1.jpg';
import slide2 from '../../../assets/image/proparty-img/slide-2.jpg';
import slide3 from '../../../assets/image/proparty-img/slide-3.jpg';

function HomeSlider() {
  return (
    <div className="container-fluid">
      <div className="home-carousel-wrapper" style={{ marginTop: '-200px' }}>
        <div id="main-carousel" className="carousel slide" data-ride="carousel">
          {/* <!-- carousel indicators --> */}
          <ul className="carousel-indicators">
            <li data-target="#main-carousel" data-slide-to="0" className="active" />
            <li data-target="#main-carousel" data-slide-to="1" />
            <li data-target="#main-carousel" data-slide-to="2" />
          </ul>

          {/* <!-- carousel inner --> */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={slide1} alt="" className="img-fluid" />

              <div className="carousel-caption">
                <h4 className="address mb-5 animated zoomIn delay-3s">
                  <p>Dolar,Florida</p>
                  <p>78432</p>
                </h4>

                <h2 className="property-name mb-5 animated zoomIn delay-2s">
                  <span className="text-success">204</span> rino <br />
                  venda road five
                </h2>

                <h3 className="rent animated slideInUp delay-2s">RENT | $ 12,000</h3>
              </div>
            </div>
            {/* <!-- single slide end --> */}
            <div className="carousel-item">
              <img src={slide2} alt="" className="img-fluid" />

              <div className="carousel-caption">
                <h4 className="address mb-5 animated zoomIn delay-3s">
                  <p>Dolar,Florida</p>
                  <p>78432</p>
                </h4>

                <h2 className="property-name mb-5 animated zoomIn delay-2s">
                  <span className="text-success">204</span> rino <br />
                  venda road five
                </h2>

                <h3 className="rent animated slideInUp delay-2s">RENT | $ 12,000</h3>
              </div>
            </div>
            {/* <!-- single slide end --> */}
            <div className="carousel-item">
              <img src={slide3} alt="" className="img-fluid" />

              <div className="carousel-caption">
                <h4 className="address mb-5 animated zoomIn delay-3s">
                  <p>Dolar,Florida</p>
                  <p>78432</p>
                </h4>

                <h2 className="property-name mb-5 animated zoomIn delay-2s">
                  <span className="text-success">204</span> rino <br />
                  venda road five
                </h2>

                <h3 className="rent animated slideInUp delay-2s">RENT | $ 12,000</h3>
              </div>
            </div>
            {/* <!-- single slide end --> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSlider;
