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

function Property() {
  const [properties, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchData(`/api/v1/property`, setBlogs, setIsLoading);
  }, []);

  const removeAgent = async (id) => {
    const res = await axios.delete(`/api/v1/property/${id}`);
    const deleteId = res.data.result.data._id;
    setBlogs(properties.filter((blog) => blog._id != deleteId));
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <PageHeader
        title="Properties"
        btnLink="/property/create-property"
        btnText="Add New Property"
        icon="plus"
      />
      <TableLayout title="All Properties" theadList={['#', 'Name', 'Publish Date']}>
        <tbody>
          {properties &&
            properties.map((property, i) => (
              <tr key={Math.random()}>
                <td>{i + 1}</td>
                <td>{property.name}</td>
                <td>
                  {formatDate(property.created)} - {formatTime(property.created)}
                </td>
                <td>
                  <Link
                    to={`/property/update-property?id=${property._id}`}
                    className="btn btn-success"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => removeAgent(property._id)}
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

export default Property;
