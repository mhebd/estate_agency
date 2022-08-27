import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../../../assets/css/news-grid.css';
import BlogCard from '../../common/reusable/BlogCard';
import PageHeader from '../../common/reusable/PageHeader';

function Blog() {
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
    <>
      <div className="news-grid-section">
        <div className="container">
          <PageHeader heading="Our Latest News" page="blog" />

          <div className="grid-news">
            <div className="row">
              {news &&
                news.map((blog) => (
                  <div className="col-md-4 mb-4" key={Math.random()}>
                    <BlogCard blog={blog} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="grid-pagination clearfix my-5">
          <ul className="pagination float-right">
            <li className="page-item">
              <a href="/" className="page-link">
                <i className="fas fa-angle-left" />
              </a>
            </li>
            <li className="page-item">
              <a href="/" className="page-link">
                1
              </a>
            </li>
            <li className="page-item">
              <a href="/" className="page-link">
                2
              </a>
            </li>
            <li className="page-item">
              <a href="/" className="page-link">
                3
              </a>
            </li>
            <li className="page-item">
              <a href="/" className="page-link">
                4
              </a>
            </li>
            <li className="page-item">
              <a href="/" className="page-link">
                5
              </a>
            </li>
            <li className="page-item">
              <a href="/" className="page-link">
                <i className="fas fa-angle-right" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Blog;
