import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AgentCard from '../../common/reusable/AgentCard';

function HomeAgentSec() {
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
    <div className="section agents">
      <div className="container">
        <div className="section-header clearfix">
          <h2 className="heading float-left">Best Agents</h2>
          <h3 className="float-right">
            <a href="agent-grid.html" className="link">
              All Agents <i className="fas fa-angle-right ml-3" />
            </a>
          </h3>
        </div>

        <div className="agents-wrapper">
          <div className="row">{agents && agents.map((agent) => <AgentCard agent={agent} />)}</div>
        </div>
      </div>
    </div>
  );
}

export default HomeAgentSec;
