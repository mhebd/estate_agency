/* eslint-disable react/jsx-props-no-spreading */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import BlogCard from '../../common/reusable/BlogCard';

function HomeNewsSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
  };
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const res = await axios(`http://localhost:5000/api/v1/news`);
      setNews(res.data.result.data);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

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
          <div className="news-carousel">
            <Slider {...settings}>{news && news.map((blog) => <BlogCard blog={blog} />)}</Slider>
          </div>
          {/* {{<!-- carousel end -->}} */}
        </div>
      </div>
    </div>
  );
}

export default HomeNewsSlider;
