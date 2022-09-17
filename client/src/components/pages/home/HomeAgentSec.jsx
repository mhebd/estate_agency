import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AgentCard from '../../common/reusable/AgentCard';
import HomeSectionHeading from '../../common/reusable/HomeSectionHeading';
import Loading from '../../common/reusable/Loading';

function HomeAgentSec() {
  const [agents, setAgents] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const res = await axios(`/api/v1/agent?limit=3&page=1`);
      setAgents(res.data.result.data);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="section agents">
      <div className="container">
        <HomeSectionHeading title="Best Agents" linkText="Agents" link="/agent" />

        <div className="agents-wrapper">
          <div className="row">{agents && agents.map((agent) => <AgentCard agent={agent} />)}</div>
        </div>
      </div>
    </div>
  );
}

export default HomeAgentSec;
