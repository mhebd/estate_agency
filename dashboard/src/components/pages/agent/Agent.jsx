/* eslint-disable eqeqeq */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fetchData from '../../../utility/fetchData';
import formatDate from '../../../utility/formatDate';
import formatTime from '../../../utility/formatTime';
import Loading from '../../reusable/Loading';
import PageHeader from '../../reusable/PageHeader';
import TableLayout from '../../reusable/TableLayout';

function Agent() {
  const [agents, setAgents] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchData(`/api/v1/agent`, setAgents, setIsLoading);
  }, []);

  const removeAgent = async (id) => {
    const res = await axios.delete(`/api/v1/agent/${id}`);
    const deleteId = res.data.result.data._id;
    setAgents(agents.filter((agent) => agent._id != deleteId));
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <PageHeader title="Agent" btnLink="/agent/create-agent" btnText="Add New Agent" icon="plus" />
      <TableLayout title="All Services" theadList={['#', 'Name', 'Publish Date']}>
        <tbody>
          {agents &&
            agents.map((agent, i) => (
              <tr key={Math.random()}>
                <td>{i + 1}</td>
                <td>{agent.name}</td>
                <td>
                  {formatDate(agent.created)} - {formatTime(agent.created)}
                </td>
                <td>
                  <Link to={`/agent/create-agent?id=${agent._id}`} className="btn btn-success">
                    Edit
                  </Link>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => removeAgent(agent._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </TableLayout>
    </>
  );
}

export default Agent;
