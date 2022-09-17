import React from 'react';
import AgentSocialNav from '../../pages/agent/agent-single/AgentSocialNav';

function AgentInfo({ agent: { name, avatar, contact, email, social, biodata } }) {
  return (
    <div className="agent-information-wrapper">
      <div className="row">
        <div className="col-lg-6">
          <div className="agent-img">
            <img src={`../${avatar}`} alt={name} className="img-fluid" />
          </div>
        </div>

        <div className="col-lg-5">
          <div className="agent-information">
            <div className="agent-name mb-5">
              <h2 className="name">{name}</h2>
              <div className="h-border-bottom" />
            </div>

            <div className="agent-prg mb-5">
              <p className="">{biodata}</p>
            </div>

            <div className="agent-info-list mb-5">
              <ul className="list-group list-unstyled">
                <li className="list-item">
                  <strong>Phone:</strong> {contact?.phone}
                </li>
                <li className="list-item">
                  <strong>Mobile:</strong> {contact?.mobile}
                </li>
                <li className="list-item">
                  <strong>Email:</strong> {email}
                </li>
                <li className="list-item">
                  <strong>Skype:</strong> {contact?.skype}
                </li>
              </ul>
            </div>

            <AgentSocialNav socialList={social} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgentInfo;
