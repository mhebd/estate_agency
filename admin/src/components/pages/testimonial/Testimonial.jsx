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

function Testimonial() {
  const [testimonials, setTestimonials] = useState(null);
  const [perPageItem, setPerPageItem] = useState(5);
  const [activePage, setActivePage] = useState(1);
  const [totalItem, setTotalItem] = useState(perPageItem);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const fetchTM = await fetchData(
        `/api/v1/testimonial?page=${activePage}&limit=${perPageItem}`
      );
      setTestimonials(fetchTM.data);
      setTotalItem(fetchTM.dataCount);
      setIsLoading(false);
    })();
  }, [activePage, perPageItem]);

  const removeTestimonial = async (id) => {
    const res = await axios.delete(`/api/v1/testimonial/${id}`);
    const deletedId = res.data.result.data._id;
    setTestimonials(testimonials.filter((testimonial) => testimonial._id != deletedId));
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <PageHeader
        title="Testimonial"
        btnLink="/dashboard/testimonial/create-testimonial"
        btnText="Add New Testimonial"
        icon="plus"
      />
      <CardLayout title="All Testimonias">
        <TableLayout theadList={['#', 'Name', 'Publish Date']}>
          <tbody>
            {testimonials &&
              testimonials.map((testimonial, i) => (
                <tr key={Math.random()}>
                  <td>{i + 1}</td>
                  <td>{testimonial.name}</td>
                  <td>
                    {formatDate(testimonial.created)} - {formatTime(testimonial.created)}
                  </td>
                  <td>
                    <Link
                      to={`/dashboard/testimonial/update-testimonial?id=${testimonial._id}`}
                      className="btn btn-success"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => removeTestimonial(testimonial._id)}
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

export default Testimonial;
