import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../../../assets/css/agent-grid.css';
import AgentCard from '../../common/reusable/AgentCard';
import Loading from '../../common/reusable/Loading';
import PageHeader from '../../common/reusable/PageHeader';
import Paginate from '../../common/reusable/Paginate';

function Agent() {
  const itemPerPage = 6;
  const [agents, setAgents] = useState(null);
  const [loading, setLoading] = useState(false);
  const [totalItem, setTotalItem] = useState(itemPerPage);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const res = await axios(`/api/v1/agent?page=${activePage}&limit=${itemPerPage}`);
      setAgents(res.data.result.data);
      setTotalItem(res.data.result.dataCount);
      setLoading(false);
    })();
  }, [activePage]);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="agents agent-grid">
        <div className="container">
          <PageHeader heading="Our Best Agents" page="agent" />

          <div className="agents-wrapper">
            <div className="row">
              {agents && agents.map((agent) => <AgentCard agent={agent} />)}
            </div>
          </div>
        </div>
      </div>

      <Paginate
        activePage={activePage}
        itemPerPage={itemPerPage}
        totalItem={totalItem}
        onChange={setActivePage}
      />
    </>
  );
}

export default Agent;
