import React from 'react';

function HomePropertySlider() {
  return (
    <div className="section property-carousel-wrapper">
      <div className="container">
        <div className="section-header clearfix">
          <h2 className="heading float-left">Latest Properties</h2>
          <h3 className="more-properties float-right">
            <a href="property-gride.html" className="link">
              All Property <i className="fas fa-angle-right ml-3" />
            </a>
          </h3>
        </div>
        <div className="slider-wrapper">
          {/* <!-- carousel start --> */}
          <div className="owl-carousel owl-theme property-carousel">
            <div className="item">
              <div className="single-property">
                <div className="card">
                  <img src="../image/proparty-img/property-9.jpg" alt="" className="card-img" />

                  <div className="property-caption">
                    <div className="information">
                      <h2 className="address">206 Mount Olive Road Two</h2>
                      <h4 className="rent">RENT | $ 12,000</h4>
                      <a href="/" className="link">
                        Click here to view
                        <i className="fas fa-angle-right ml-3" />
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
            {/* <!-- single item end --> */}
            <div className="item">
              <div className="single-property">
                <div className="card">
                  <img src="../image/proparty-img/property-6.jpg" alt="" className="card-img" />

                  <div className="property-caption">
                    <div className="information">
                      <h2 className="address">206 Mount Olive Road Two</h2>
                      <h4 className="rent">RENT | $ 12,000</h4>
                      <a href="/" className="link">
                        Click here to view
                        <i className="fas fa-angle-right ml-3" />
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
            {/* <!-- single item end --> */}
            <div className="item">
              <div className="single-property">
                <div className="card">
                  <img src="../image/proparty-img/property-7.jpg" alt="" className="card-img" />

                  <div className="property-caption">
                    <div className="information">
                      <h2 className="address">206 Mount Olive Road Two</h2>
                      <h4 className="rent">RENT | $ 12,000</h4>
                      <a href="/" className="link">
                        Click here to view
                        <i className="fas fa-angle-right ml-3" />
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
            {/* <!-- single item end --> */}
            <div className="item">
              <div className="single-property">
                <div className="card">
                  <img src="../image/proparty-img/property-8.jpg" alt="" className="card-img" />

                  <div className="property-caption">
                    <div className="information">
                      <h2 className="address">206 Mount Olive Road Two</h2>
                      <h4 className="rent">RENT | $ 12,000</h4>
                      <a href="/" className="link">
                        Click here to view
                        <i className="fas fa-angle-right ml-3" />
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
            {/* <!-- single item end --> */}
          </div>

          {/* <!-- carousel end --> */}
        </div>
      </div>
    </div>
  );
}

export default HomePropertySlider;
