import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HomeSectionHeading from '../../common/reusable/HomeSectionHeading';
import Loading from '../../common/reusable/Loading';

function HomeService() {
  const [services, setServices] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await axios(`/api/v1/service`);
        setServices(res.data?.result?.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="section services-wrapper">
      <div className="container">
        <HomeSectionHeading title="Our Services" />

        <div className="services">
          <div className="row">
            {services &&
              services.map((service) => (
                <div className="col-lg-4 mb-4" key={Math.random()}>
                  <div className="service wow zoomIn">
                    <div className="service-header d-flex mb-4">
                      <div className="service-icon">
                        <i className={`fas fa-${service.icon}`} />
                      </div>
                      <div className="s-heading align-self-center">
                        <h2 className="">{service?.title}</h2>
                      </div>
                    </div>

                    <p className="service-prg lead">{service?.details}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeService;
