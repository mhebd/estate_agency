/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import post1 from '../../../assets/image/proparty-img/post-1.jpg';
import post2 from '../../../assets/image/proparty-img/post-2.jpg';
import post3 from '../../../assets/image/proparty-img/post-3.jpg';
import post4 from '../../../assets/image/proparty-img/post-4.jpg';

function HomeNewsSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
  };
  return (
    <div className="section news-carousel-wrapper">
      <div className="container">
        <div className="section-header clearfix">
          <h2 className="heading float-left">Latest News</h2>
          <h3 className="more-news float-right">
            <a href="news-grid.html" className="link">
              All News <i className="fas fa-angle-right ml-3" />
            </a>
          </h3>
        </div>
        <div className="slider-wrapper">
          {/* <!-- carousel start --> */}
          <Slider {...settings} className="news-carousel">
            <div className="item px-2">
              <div className="single-news">
                <div className="card">
                  <img src={post1} alt="" className="card-img" />

                  <div className="news-caption">
                    <span className="news-tittle">house</span>
                    <h2 className="heading">
                      <a href="/">house is comming very soon</a>
                    </h2>
                    <p className="date">18 sep. 2018</p>
                  </div>
                </div>
              </div>
            </div>
            {/* {{<!-- single-news end -->}} */}
            <div className="item">
              <div className="single-news">
                <div className="card">
                  <img src={post2} alt="" className="card-img" />

                  <div className="news-caption">
                    <span className="news-tittle">house</span>
                    <h2 className="heading">
                      <a href="/">house is comming very soon</a>
                    </h2>
                    <p className="date">18 sep. 2018</p>
                  </div>
                </div>
              </div>
            </div>
            {/* {{<!-- single-news end -->}} */}
            <div className="item">
              <div className="single-news">
                <div className="card">
                  <img src={post3} alt="" className="card-img" />

                  <div className="news-caption">
                    <span className="news-tittle">house</span>
                    <h2 className="heading">
                      <a href="/">house is comming very soon</a>
                    </h2>
                    <p className="date">18 sep. 2018</p>
                  </div>
                </div>
              </div>
            </div>
            {/* {{<!-- single-news end -->}} */}
            <div className="item">
              <div className="single-news">
                <div className="card">
                  <img src={post4} alt="" className="card-img" />

                  <div className="card-img-overlay news-caption">
                    <span className="news-tittle">house</span>
                    <h2 className="heading">
                      <a href="/">house is comming very soon</a>
                    </h2>
                    <p className="date">18 sep. 2018</p>
                  </div>
                </div>
              </div>
            </div>
            {/* {{<!-- single-news end -->}} */}
          </Slider>
          {/* {{<!-- carousel end -->}} */}
        </div>
      </div>
    </div>
  );
}

export default HomeNewsSlider;
