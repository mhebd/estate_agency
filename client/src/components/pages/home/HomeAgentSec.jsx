import React from 'react';
import agent5 from '../../../assets/image/proparty-img/agent-5.jpg';
import agent6 from '../../../assets/image/proparty-img/agent-6.jpg';
import agent7 from '../../../assets/image/proparty-img/agent-7.jpg';

function HomeAgentSec() {
  return (
    <div className="section agents">
      <div className="container">
        <div className="section-header clearfix">
          <h2 className="heading float-left">Best Agents</h2>
          <h3 className="float-right">
            <a href="agent-grid.html" className="link">
              All Agents <i className="fas fa-angle-right ml-3" />
            </a>
          </h3>
        </div>

        <div className="agents-wrapper">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="single-agent card">
                <img src={agent5} alt="" className="card-img" />
                <div className="agent-overlay card-img-overlay">
                  <div className="agent-info">
                    <h2 className="agent-name">
                      <a href="/">Margaret Sotillo Escala</a>
                    </h2>
                    <p className="agent-prg">
                      Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.
                    </p>

                    <p className="agent-phone">
                      <strong>Phone:</strong> +54 356 945234
                    </p>
                    <p className="agent-email">
                      <strong>Email:</strong> agents@example.com
                    </p>

                    <ul className="nav social-nav">
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
            {/* <!-- single agent end --> */}
            <div className="col-md-4 mb-4">
              <div className="single-agent card">
                <img src={agent6} alt="" className="card-img" />
                <div className="agent-overlay card-img-overlay">
                  <div className="agent-info">
                    <h2 className="agent-name">
                      <a href="/">Margaret Sotillo Escala</a>
                    </h2>
                    <p className="agent-prg">
                      Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.
                    </p>

                    <p className="agent-phone">
                      <strong>Phone:</strong> +54 356 945234
                    </p>
                    <p className="agent-email">
                      <strong>Email:</strong> agents@example.com
                    </p>

                    <ul className="nav social-nav">
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
            {/* {<!-- single agent end -->} */}
            <div className="col-md-4 mb-4">
              <div className="single-agent card">
                <img src={agent7} alt="" className="card-img" />
                <div className="agent-overlay card-img-overlay">
                  <div className="agent-info">
                    <h2 className="agent-name">
                      <a href="/">Margaret Sotillo Escala</a>
                    </h2>
                    <p className="agent-prg">
                      Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.
                    </p>

                    <p className="agent-phone">
                      <strong>Phone:</strong> +54 356 945234
                    </p>
                    <p className="agent-email">
                      <strong>Email:</strong> agents@example.com
                    </p>

                    <ul className="nav social-nav">
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
            {/* {{<!-- single agent end -->}} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAgentSec;
