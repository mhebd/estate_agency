import React from 'react';
import '../../../assets/css/about.css';
import PageHeader from '../../common/reusable/PageHeader';
import HomeAgentSec from '../home/HomeAgentSec';

function About() {
  return (
    <>
      <div className="about-section-wrapper">
        <div className="container">
          <PageHeader heading="We Do Great Design For Creative Folks" page="about" />

          <div className="about-img-wrapper">
            <div className="row justify-content-center">
              <div className="col-10">
                <div className="about-img">
                  <img
                    src="https://mhebd.github.io/myproject/image/proparty-img/slide-about-1.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="about-img-overlay">
                  <div className="estate-agency">
                    <h2 className="name">EstatrAgency</h2>
                    <h2 className="sinse">Sinse 2010</h2>
                    <p className="lead">Art & Creative</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-agency mt-5">
            <div className="row">
              <div className="col-lg-5 mb-4">
                <div className="author-img">
                  <img
                    src="https://mhebd.github.io/myproject/image/proparty-img/property-5.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-2 d-none d-lg-block">
                <div className="amazing-text">
                  <span className="text">
                    EstateAgency <br /> Exclusive Property
                  </span>
                </div>
              </div>

              <div className="col-lg-5 mb-">
                <div className="agency-info">
                  <div className="agency-info-header mb-5">
                    <h2 className="heading">
                      Sed <span>porttitor</span> lectus nibh.
                    </h2>
                    <div className="h-border-bottom" />
                  </div>
                  <div className="agency-prg">
                    <p className="">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque rerum
                      nemo eum, dicta modi consequatur maxime esse exercitationem praesentium
                      doloremque officia aspernatur nisi unde incidunt recusandae eius distinctio!
                      Consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                      voluptatum obcaecati at quis fuga labore!
                    </p>

                    <p className="">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, delectus odio
                      ratione vel tenetur esse assumenda illo autem quod reprehenderit ex facilis
                      exercitationem, quisquam cumque, repellat enim voluptatibus. Omnis,
                      cupiditate!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HomeAgentSec />
    </>
  );
}

export default About;
