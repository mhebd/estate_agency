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

function Service() {
  const [services, setServices] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const fetchServices = await fetchData(`/api/v1/service`);
      setServices(fetchServices);
      setIsLoading(false);
    })();
  }, []);

  const removeService = async (id) => {
    const res = await axios.delete(`/api/v1/service/${id}`);
    const deleteId = res.data.result.data._id;
    setServices(services.filter((service) => service._id != deleteId));
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <PageHeader
        title="Services"
        btnLink="/service/create-service"
        btnText="Add New Service"
        icon="plus"
      />
      <TableLayout title="All Services" theadList={['#', 'Name', 'Publish Date']}>
        <tbody>
          {services &&
            services.map((service, i) => (
              <tr key={Math.random()}>
                <td>{i + 1}</td>
                <td>{service.title}</td>
                <td>
                  {formatDate(service.created)} - {formatTime(service.created)}
                </td>
                <td>
                  <Link
                    to={`/service/update-service?id=${service._id}`}
                    className="btn btn-primary"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => removeService(service._id)}
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

export default Service;
