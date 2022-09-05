/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link } from 'react-router-dom';

function AgentCard({ agent }) {
  return (
    <div className="col-md-4 mb-4" key={Math.random()}>
      <div className="single-agent card">
        <img src={`${agent.avatar}`} alt="" className="card-img" />
        <div className="agent-overlay card-img-overlay">
          <div className="agent-info">
            <h2 className="agent-name">
              <Link to={`/agent/${agent._id}`}>{agent.name}</Link>
            </h2>
            <p className="agent-prg">
              {agent.biodata}
              two.
            </p>

            <p className="agent-phone">
              <strong>Phone:</strong> +54 356 945234
            </p>
            <p className="agent-email">
              <strong>Email:</strong> {agent.email}
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
  );
}

export default AgentCard;
