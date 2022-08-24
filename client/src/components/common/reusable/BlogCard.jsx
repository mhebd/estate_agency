/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link } from 'react-router-dom';

function BlogCard({ blog }) {
  return (
    <div className="item px-2" key={Math.random()}>
      <div className="single-news">
        <div className="card">
          <img src={`http://localhost:5000/${blog.coverImage}`} alt="" className="card-img" />

          <div className="news-caption">
            <span className="news-tittle">{blog.category}</span>
            <h2 className="heading">
              <Link to={`/blog/${blog._id}`}>{blog.title}</Link>
            </h2>
            <p className="date">18 sep. 2018</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
