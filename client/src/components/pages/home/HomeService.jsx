import axios from 'axios';
import React, { useEffect, useState } from 'react';

function HomeService() {
  const [services, setServices] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await axios(`http://localhost:5000/api/v1/service`);
        setServices(res.data?.result?.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return <div className="">Loading...</div>;
  }

  return (
    <div className="section services-wrapper">
      <div className="container">
        <div className="section-header">
          <h2 className="heading">Our Services</h2>
        </div>

        <div className="services">
          <div className="row">
            {services &&
              services.map((service) => (
                <div className="col-lg-4 mb-4" key={Math.random()}>
                  <div className="service wow zoomIn">
                    <div className="service-header d-flex mb-4">
                      <div className="service-icon">
                        <i className="fas fa-dollar-sign" />
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
