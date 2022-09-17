/* eslint-disable react/jsx-props-no-spreading */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import homeSliderSettings from '../../../utils/sliderSettings';
import BlogCard from '../../common/reusable/BlogCard';
import HomeSectionHeading from '../../common/reusable/HomeSectionHeading';
import Loading from '../../common/reusable/Loading';

function HomeNewsSlider() {
  const settings = homeSliderSettings(3, 1, true);
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const res = await axios(`/api/v1/news?page=1&limit=6`);
      setNews(res.data.result.data);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="section news-carousel-wrapper">
      <div className="container">
        <HomeSectionHeading title="Latest News" linkText="Posts" link="/blog" />
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
