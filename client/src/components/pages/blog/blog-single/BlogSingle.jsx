/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../../../../assets/css/news-single.css';

function BlogSingle() {
  return (
    <div className="news-single-section">
      <div className="container">
        <div className="news-single-header mb-5">
          <div className="row">
            <div className="col-lg-8 mb-4">
              <div className="header">
                <h2 className="heading">Book Cover Deisgn</h2>
                <p className="header-prg">News Single.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="breadcrumb-wrapper justify-content-end">
                <ul className="breadcrumb justify-content-start justify-content-lg-end">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active"> Book Cover Deisgn</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="news-big-img">
          <div className="row">
            <div className="col-12 mb-5">
              <img src="../image/proparty-img/slide-3.jpg" alt="" className="img-fluid mb-5" />
              <div className="img-caption text-center mb-5">
                <p>
                  <strong>Author:</strong>
                  <span>Morgan Jimenez </span>
                  <strong>Category:</strong>
                  <span> Travel </span>
                  <strong>Date:</strong>
                  <span> 19 Apr. 2019 </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="news-single-prg-wrapper mb-5">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="news-single-prg mb-5">
                <p className="lead">
                  Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur
                  <strong>adipiscing</strong> elit. Vestibulum ac diam sit amet quam vehicula
                  elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec,
                  egestas non nisi.{' '}
                </p>

                <p className="">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga deserunt doloremque
                  sequi aliquid, porro nihil et voluptate reprehenderit repellendus voluptatum
                  libero tenetur vero quo unde ullam consequuntur, eos veniam quisquam! Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Est quis error quae!
                </p>

                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, pariatur? Fugiat
                  alias odio minima eius ratione, expedita asperiores vero aliquam assumenda
                  sapiente. Dolores ea totam numquam vero aliquam assumenda sapiente. Dolores ea
                  totam numquam nesciunt. Fugiat, numquam. Officia! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Temporibus ut veritatis nam.
                </p>

                <blockquote className="blockquote">
                  <p className="block-prg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                    ante.
                  </p>

                  <div className="blockquote-footer">
                    {' '}
                    Albert Vargas <em>Author</em>{' '}
                  </div>
                </blockquote>

                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolorum iusto at
                  doloremque accusamus expedita consectetur corporis, ad omnis tempora libero
                  reprehenderit nulla numquam architecto. Doloribus modi dignissimos repudiandae
                  dicta.
                </p>
              </div>

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
  );
}

export default BlogSingle;
