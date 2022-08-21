import React from 'react';
import '../../../assets/css/property-grid.css';

function Property() {
  return (
    <>
      {' '}
      <div className="property-grid-section">
        <div className="container">
          <div className="property-grid-header">
            <div className="row">
              <div className="col-lg-8 mb-4">
                <div className="header">
                  <h2 className="heading">Our Amazing Properties</h2>
                  <p className="header-prg">Grid Properties</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="breadcrumb-wrapper justify-content-end">
                  <ul className="breadcrumb justify-content-start justify-content-lg-end">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Properties Grid</li>
                  </ul>
                </div>
              </div>
            </div>
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

          <div className="grid-properties">
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

export default Property;
