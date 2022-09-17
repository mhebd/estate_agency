import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../../../assets/css/news-grid.css';
import BlogCard from '../../common/reusable/BlogCard';
import Loading from '../../common/reusable/Loading';
import PageHeader from '../../common/reusable/PageHeader';
import Paginate from '../../common/reusable/Paginate';

function Blog() {
  const itemPerPage = 12;
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [totalItem, setTotalItem] = useState(itemPerPage);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const res = await axios(`/api/v1/news?page=${activePage}&limit=${itemPerPage}`);
      setNews(res.data.result.data);
      setTotalItem(res.data.result.dataCount);
      setLoading(false);
    })();
  }, [activePage]);

  if (loading) {
    return <Loading />;
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

      <Paginate
        activePage={activePage}
        itemPerPage={itemPerPage}
        totalItem={totalItem}
        onChange={setActivePage}
      />
    </>
  );
}

export default Blog;
