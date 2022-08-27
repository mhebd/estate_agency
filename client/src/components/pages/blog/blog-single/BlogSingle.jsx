/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../../../assets/css/news-single.css';
import PageHeader from '../../../common/reusable/PageHeader';

function BlogSingle() {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const res = await axios(`http://localhost:5000/api/v1/news/${blogId}`);
      setBlog(res.data.result.data);
      setLoading(false);
    })();
  }, [blogId]);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    blog && (
      <div className="news-single-section">
        <div className="container">
          <PageHeader heading={blog.title} page="blog" title={blog.title} />

          <div className="news-big-img">
            <div className="row">
              <div className="col-12 mb-5">
                <img
                  src={`http://localhost:5000/${blog.coverImage}`}
                  alt={blog.title}
                  className="img-fluid mb-5"
                />
                <div className="img-caption text-center mb-5">
                  <p>
                    <strong>Author:</strong>
                    <span>{blog.author}</span> <strong>Category:</strong>
                    <span> {blog.category} </span> <strong>Date:</strong>
                    <span> {new Date(blog.created).toLocaleDateString()} </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="news-single-prg-wrapper mb-5">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="news-single-prg mb-5">{blog.content}</div>

                <div className="nsp-share-icon mt-5 clearfix">
                  <p className="float-left mr-4">Share:</p>
                  <ul className="share-icon nav">
                    <li className="nav-item">
                      <a href="/" className="nav-link">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/" className="nav-link">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/" className="nav-link">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="news-comment-wrapper my-5">
            <div className="nc-header mb-5">
              <h2 className="heading">Comments (4)</h2>
              <div className="h-border-bottom" />
            </div>

            <div className="medai-wrapper">
              <div className="media mb-5">
                <img src="../image/proparty-img/agent-4.jpg" alt="" className="mr-4" />
                <div className="media-body">
                  <h2 className="media-heading">Emma Stone</h2>
                  <p className="media-date mb-5">
                    <em>18 Sep 2017</em>
                  </p>
                  <p className="media-prg mb-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus aperiam rerum
                    magnam ipsa distinctio!
                  </p>
                  <a href="/" className="media-reply">
                    Reply
                  </a>

                  <div className="media sub-media mt-4">
                    <img src="../image/proparty-img/agent-6.jpg" alt="" className="mr-4" />

                    <div className="media-body">
                      <h2 className="media-heading">Oliver Colmenares</h2>
                      <p className="media-date mb-5">
                        <em>18 Sep 2017</em>
                      </p>
                      <p className="media-prg mb-4">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus aperiam
                        rerum magnam ipsa distinctio!
                      </p>
                      <a href="/" className="media-reply">
                        Reply
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="media mb-5">
                <img src="../image/proparty-img/agent-4.jpg" alt="" className="mr-4" />
                <div className="media-body">
                  <h2 className="media-heading">Emma Stone</h2>
                  <p className="media-date mb-5">
                    <em>18 Sep 2017</em>
                  </p>
                  <p className="media-prg mb-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus aperiam rerum
                    magnam ipsa distinctio!
                  </p>
                  <a href="/" className="media-reply">
                    Reply
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="news-comment-form my-5">
            <div className="comment-form-header mb-5">
              <h2 className="heading">Leave A Reply</h2>
              <div className="h-border-bottom" />
            </div>
            <div className="comment-form">
              <form action="">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="">Enter Name</label>
                      <input type="text" className="form-control" placeholder="Name" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="">Enter Email</label>
                      <input type="email" className="form-control" placeholder="Email" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="">Enter Website</label>
                  <input type="text" className="form-control" placeholder="Website" />
                </div>
                <div className="form-group">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    className="textarea form-control"
                    placeholder="Comment"
                  />
                </div>

                <button type="button" className="btn-dark btn nc-btn">
                  Send Comment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default BlogSingle;
