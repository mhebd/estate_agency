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

function Blog() {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const fetchBlogs = await fetchData(`/api/v1/news`);
      setBlogs(fetchBlogs);
      setIsLoading(false);
    })();
  }, []);

  const removeAgent = async (id) => {
    const res = await axios.delete(`/api/v1/news/${id}`);
    const deleteId = res.data.result.data._id;
    setBlogs(blogs.filter((blog) => blog._id != deleteId));
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <PageHeader title="Blogs" btnLink="/blog/create-post" btnText="Add New Post" icon="plus" />
      <TableLayout title="All Blogs" theadList={['#', 'Name', 'Publish Date']}>
        <tbody>
          {blogs &&
            blogs.map((blog, i) => (
              <tr key={Math.random()}>
                <td>{i + 1}</td>
                <td>{blog.title}</td>
                <td>
                  {formatDate(blog.created)} - {formatTime(blog.created)}
                </td>
                <td>
                  <Link to={`/blog/update-post?id=${blog._id}`} className="btn btn-success">
                    Edit
                  </Link>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => removeAgent(blog._id)}
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

export default Blog;
