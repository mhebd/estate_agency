/* eslint-disable eqeqeq */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fetchData from '../../../utility/fetchData';
import formatDate from '../../../utility/formatDate';
import formatTime from '../../../utility/formatTime';
import CardLayout from '../../reusable/CardLayout';
import Loading from '../../reusable/Loading';
import PageHeader from '../../reusable/PageHeader';
import Paginate from '../../reusable/Paginate';
import TableLayout from '../../reusable/TableLayout';
import Error from '../not-found/Error';

function Agent() {
  const [agents, setAgents] = useState(null);
  const [perPageItem, setPerPageItem] = useState(5);
  const [activePage, setActivePage] = useState(1);
  const [totalItem, setTotalItem] = useState(perPageItem);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const fetchAgents = await fetchData(`/api/v1/agent?page=${activePage}&limit=${perPageItem}`);
      setAgents(fetchAgents.data);
      setTotalItem(fetchAgents.dataCount);
      setIsLoading(false);
    })();
  }, [activePage, perPageItem]);

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
      <PageHeader
        title="Agent"
        btnLink="/dashboard/agent/create-agent"
        btnText="Add New Agent"
        icon="plus"
      />
      {agents === null ? (
        <Error />
      ) : (
        <CardLayout title="All Agents">
          <TableLayout theadList={['#', 'Name', 'Publish Date']}>
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
                      <Link
                        to={`/dashboard/agent/create-agent?aid=${agent._id}`}
                        className="btn btn-success"
                      >
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
          <hr />
          <Paginate
            perPageItem={perPageItem}
            setPerPageItem={setPerPageItem}
            activePage={activePage}
            setActivePage={setActivePage}
            totalItem={totalItem}
          />
        </CardLayout>
      )}
    </>
  );
}

export default Agent;
