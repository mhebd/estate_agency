/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link } from 'react-router-dom';
import AgentSocialNav from '../../pages/agent/agent-single/AgentSocialNav';

function AgentCard({
  agent: {
    avatar,
    name,
    _id,
    biodata,
    email,
    social,
    contact: { phone },
  },
}) {
  return (
    <div className="col-md-4 mb-4" key={Math.random()}>
      <div className="single-agent card">
        <img src={`${avatar}`} alt="" className="card-img" />
        <div className="agent-overlay card-img-overlay">
          <div className="agent-info">
            <h2 className="agent-name">
              <Link to={`/agent/${_id}`}>{name}</Link>
            </h2>
            <p className="agent-prg">
              {biodata}
              two.
            </p>

            <p className="agent-phone">
              <strong>Phone:</strong> {phone}
            </p>
            <p className="agent-email">
              <strong>Email:</strong> {email}
            </p>

            <AgentSocialNav socialList={social} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgentCard;
