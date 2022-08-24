import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../../../assets/css/agent-grid.css';
import AgentCard from '../../common/reusable/AgentCard';

function Agent() {
  const [agents, setAgents] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const res = await axios(`http://localhost:5000/api/v1/agent`);
      setAgents(res.data.result.data);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
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
              {agents && agents.map((agent) => <AgentCard agent={agent} />)}
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
