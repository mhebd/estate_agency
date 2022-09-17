import React from 'react';

function AgentSocialNav({ socialList }) {
  return (
    <div className="agent-social">
      <ul className="nav">
        {socialList &&
          socialList.map((social) => (
            <li key={Math.random()} className="nav-item">
              <a href={`${social.url}`} className="nav-link">
                <i className={`fab fa-${social.icon}`} />
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default AgentSocialNav;
