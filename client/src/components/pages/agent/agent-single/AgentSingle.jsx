/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../../../assets/css/agent-single.css';
import AgentInfo from '../../../common/reusable/AgentInfo';
import Loading from '../../../common/reusable/Loading';
import PageHeader from '../../../common/reusable/PageHeader';
import Properties from '../../../common/reusable/Properties';

function AgentSingle() {
  const [agent, setAgent] = useState({});
  const [loading, setLoading] = useState(false);
  const { agentId } = useParams();

  useEffect(() => {
    setLoading(true);
    (async () => {
      const res = await axios(`/api/v1/agent/${agentId}`);
      setAgent(res.data.result.data);
      setLoading(false);
    })();
  }, [agentId]);

  if (loading) {
    return <Loading />;
  }
  return (
    Object.keys(agent).length > 0 && (
      <div className="agent-single-section">
        <div className="container">
          <PageHeader heading={agent?.name} page="agent" title={agent?.name} />

          <AgentInfo agent={agent} />

          <div className="agent-property-header mb-5">
            <h2 className="heading">My Properties</h2>
            <div className="h-border-bottom" />
          </div>

          {/* <div className="select-proerty clearfix">
            <div className="form-group float-right">
              <select name="" id="" className="form-control">
                <option value="">All</option>
                <option value="">One</option>
                <option value="">Two</option>
                <option value="">Three</option>
              </select>
            </div>
          </div> */}

          <Properties url={`/api/v1/property/agents-property/${agentId}`} pageHeading={false} />
        </div>
      </div>
    )
  );
}

export default AgentSingle;
