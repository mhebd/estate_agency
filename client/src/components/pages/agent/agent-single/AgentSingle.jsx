import React from 'react';
import '../../../../assets/css/agent-single.css';

function AgentSingle() {
  return (
    <div className="agent-single-section">
      <div className="container">
        <div className="agent-single-header mb-5">
          <div className="row">
            <div className="col-lg-8 mb-4">
              <div className="header">
                <h2 className="heading">Our Amazing Properties</h2>
                <p className="header-prg">Agent Single</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="breadcrumb-wrapper justify-content-end">
                <ul className="breadcrumb justify-content-start justify-content-lg-end">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="agent-grid.html">Agent</a>
                  </li>
                  <li className="breadcrumb-item active">Margaret Stone </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="agent-information-wrapper">
          <div className="row">
            <div className="col-lg-6">
              <div className="agent-img">
                <img src="../image/proparty-img/agent-7.jpg" alt="" className="img-fluid" />
              </div>
            </div>

            <div className="col-lg-5">
              <div className="agent-information">
                <div className="agent-name mb-5">
                  <h2 className="name">Margaret Stone Escala</h2>
                  <div className="h-border-bottom" />
                </div>

                <div className="agent-prg mb-5">
                  <p className="">
                    Sed porttitor lectus nibh. Praesent sapien massa, convallis a pellentesque nec,
                    egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus
                    suscipit tortor eget felis porttitor volutpat.{' '}
                  </p>
                </div>

                <div className="agent-info-list mb-5">
                  <ul className="list-group list-unstyled">
                    <li className="list-item">
                      <strong>Phone:</strong> +54 356 945234
                    </li>
                    <li className="list-item">
                      <strong>Mobile:</strong> 999 123 456 789
                    </li>
                    <li className="list-item">
                      <strong>Email:</strong> agents@example.com
                    </li>
                    <li className="list-item">
                      <strong>Skype:</strong> Margaret.Es
                    </li>
                  </ul>
                </div>

                <div className="agent-social">
                  <ul className="nav">
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
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/" className="nav-link">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="agent-property-header mb-4">
          <h2 className="heading">My Properties (6)</h2>
          <div className="h-border-bottom" />
        </div>

        <div className="select-proerty clearfix">
          <div className="form-group float-right">
            <select name="" id="" className="form-control">
              <option value="">All</option>
              <option value="">One</option>
              <option value="">Two</option>
              <option value="">Three</option>
            </select>
          </div>
        </div>

        <div className="grid-properties mb-5">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="single-property">
                <div className="card">
                  <img src="../image/proparty-img/property-9.jpg" alt="" className="card-img" />

                  <div className="property-caption">
                    <div className="information">
                      <h2 className="address">206 Mount Olive Road Two</h2>
                      <h4 className="rent">RENT | $ 12,000</h4>
                      <a href="/" className="link">
                        Click here to view <i className="fas fa-angle-right ml-3" />
                      </a>
                    </div>

                    <div className="extra-info">
                      <div className="info-table">
                        <table className="table bg-success">
                          <thead>
                            <tr>
                              <th>Area</th>
                              <th>Beds</th>
                              <th>Baths</th>
                              <th>Garages</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                340m<sup>2</sup>
                              </td>
                              <td>2</td>
                              <td>4</td>
                              <td>1</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgentSingle;
