import React, { useEffect } from 'react';

function Footer() {
  useEffect(() => {
    // on scroll add class code
    function Scroll() {
      const top = document.getElementById('top-nav');
      const X = document.getElementById('gtt-btn');
      const ypos = window.pageYOffset;
      if (ypos > 350) {
        top.classList.add('navbar-reduce');
        X.classList.add('display');
      } else {
        top.classList.remove('navbar-reduce');
        X.classList.remove('display');
      }
    }
    window.addEventListener('scroll', Scroll);
  }, []);

  return (
    <footer>
      <footer>
        <div className="section-footer bg-light">
          <div className="container">
            <div className="footer-up-section">
              <div className="row mb-4">
                <div className="col-md-4 mb-4">
                  <div className="about-agrency">
                    <h2 className="footer-heading mb-4">EstateAgency</h2>
                    <p className="foot-prg lead">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. maxime dignissimos
                      necessitatibus cumque cupiditate explicabo! Soluta, ex aspernatur.
                    </p>

                    <p className="foot-phone">
                      <strong>Phone:</strong> +54 356 945234
                    </p>

                    <p className="foot-email">
                      <strong>Email:</strong> contact@example.com
                    </p>
                  </div>
                </div>

                <div className="col-md-4 mb-4">
                  <div className="company-nav">
                    <h2 className="footer-heading mb-4">The Company</h2>

                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <a href="/" className="nav-link">
                          <i className="fas fa-angle-right mr-3" /> Site Map
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/" className="nav-link">
                          <i className="fas fa-angle-right mr-3" /> Legal
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/" className="nav-link">
                          <i className="fas fa-angle-right mr-3" /> Agent Admin
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/" className="nav-link">
                          <i className="fas fa-angle-right mr-3" /> Careers
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/" className="nav-link">
                          <i className="fas fa-angle-right mr-3" /> Affiliate
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/" className="nav-link">
                          <i className="fas fa-angle-right mr-3" /> Privacy Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-4 mb-4">
                  <div className="in-sites-nav">
                    <h2 className="footer-heading mb-4">International sites</h2>

                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <a href="/" className="nav-link">
                          <i className="fas fa-angle-right mr-3" /> Venezuela
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/" className="nav-link">
                          <i className="fas fa-angle-right mr-3" /> China
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/" className="nav-link">
                          <i className="fas fa-angle-right mr-3" /> Hong Kong Admin
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/" className="nav-link">
                          <i className="fas fa-angle-right mr-3" /> Argentina
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/" className="nav-link">
                          <i className="fas fa-angle-right mr-3" /> Singapore
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/" className="nav-link">
                          <i className="fas fa-angle-right mr-3" /> Philippines Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="footer-navigation mb-4">
                <ul className="nav justify-content-center">
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      Property
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="contact.html" className="nav-link">
                      Contact
                    </a>
                  </li>
                </ul>

                <ul className="nav justify-content-center social-nav">
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

            <div className="footer-down-section text-center py-4">
              <p className="copyright-prg">
                &copy; Copyright
                <span className="text-success">EstateAgency</span> All Rights Reserved.
              </p>
              <p className="design-prg">
                Design BY <a href="/">Mehedi Hassan</a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      <div className="go-to-top d-none" id="gtt-btn">
        <a href="#top" className="btn btn-success gtt-btn">
          <i className="fas fa-angle-up" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
