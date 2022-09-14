/* eslint-disable jsx-a11y/label-has-associated-control */
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

function Property() {
  const [properties, setProperties] = useState(null);
  const [perPageItem, setPerPageItem] = useState(5);
  const [activePage, setActivePage] = useState(1);
  const [totalItem, setTotalItem] = useState(perPageItem);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const fetchProperties = await fetchData(
        `/api/v1/property?page=${activePage}&limit=${perPageItem}`
      );
      setProperties(fetchProperties.data);
      setTotalItem(fetchProperties.dataCount);
      setIsLoading(false);
    })();
  }, [activePage, perPageItem]);

  const removeAgent = async (id) => {
    const res = await axios.delete(`/api/v1/property/${id}`);
    const deleteId = res.data.result.data._id;
    setProperties(properties.filter((blog) => blog._id != deleteId));
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <PageHeader
        title="Properties"
        btnLink="/dashboard/property/create-property"
        btnText="Add New Property"
        icon="plus"
      />
      <CardLayout title="All Properties">
        <TableLayout theadList={['#', 'Name', 'Publish Date']}>
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
                      to={`/dashboard/property/update-property?id=${property._id}`}
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
        <hr />
        <Paginate
          perPageItem={perPageItem}
          setPerPageItem={setPerPageItem}
          activePage={activePage}
          setActivePage={setActivePage}
          totalItem={totalItem}
        />
      </CardLayout>
    </>
  );
}

export default Property;
