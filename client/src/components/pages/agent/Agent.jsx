import React from 'react';
import '../../../assets/css/agent-grid.css';

function Agent() {
  return (
    <>
      <div className="section agents agent-grid">
        <div className="container">
          <div className="agent-grid-header">
            <div className="row">
              <div className="col-lg-8 mb-4">
                <div className="header">
                  <h2 className="heading">Our Amazing Properties</h2>
                  <p className="header-prg">Agent Grid</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="breadcrumb-wrapper justify-content-end">
                  <ul className="breadcrumb justify-content-start justify-content-lg-end">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Agent Grid</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="agents-wrapper">
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="single-agent card">
                  <img src="../image/proparty-img/agent-5.jpg" alt="" className="card-img" />
                  <div className="agent-overlay card-img-overlay">
                    <div className="agent-info">
                      <h2 className="agent-name">
                        <a href="/">Margaret Sotillo Escala</a>
                      </h2>
                      <p className="agent-prg">
                        Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.{' '}
                      </p>

                      <p className="agent-phone">
                        <strong>Phone:</strong> +54 356 945234
                      </p>
                      <p className="agent-email">
                        <strong>Email:</strong> agents@example.com
                      </p>

                      <ul className="nav  social-nav">
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
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="/" className="nav-link">
                            <i className="fab fa-pinterest-p" />
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

export default Agent;
