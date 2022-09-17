/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link } from 'react-router-dom';
import formatDate from '../../../utils/formatDate';

function BlogCard({ blog: { coverImage, category, title, _id, created } }) {
  return (
    <div className="item px-2" key={Math.random()}>
      <div className="single-news">
        <div className="card">
          <img src={`./${coverImage}`} alt="" className="card-img" />

          <div className="news-caption">
            <span className="news-tittle">{category}</span>
            <h2 className="heading">
              <Link to={`/blog/${_id}`}>{title}</Link>
            </h2>
            <p className="date">{formatDate(created)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
