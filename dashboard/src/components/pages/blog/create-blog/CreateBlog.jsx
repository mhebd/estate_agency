/* eslint-disable eqeqeq */
import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import createData from '../../../../utility/createData';
import fetchData from '../../../../utility/fetchData';
import updateData from '../../../../utility/updateData';
import Button from '../../../reusable/Button';
import CardLayout from '../../../reusable/CardLayout';
import Input from '../../../reusable/form/Input';
import Textarea from '../../../reusable/form/Textarea';
import Loading from '../../../reusable/Loading';
import PageHeader from '../../../reusable/PageHeader';
import Error from '../../not-found/Error';

function CreateBlog() {
  const dataObj = {
    title: '',
    author: '',
    category: '',
    content: '',
  };
  const [data, setData] = useState(dataObj);
  const [coverImage, setCoverImage] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const { id } = queryString.parse(useLocation().search);

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      (async () => {
        setData(await fetchData(`/api/v1/news/${id}`));
        setIsLoading(false);
      })();
    }
  }, [id]);

  const changeHandler = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('dataJson', JSON.stringify(data));
    if (coverImage) formData.append('coverImage', coverImage);

    if (id) {
      if (await updateData(`/api/v1/news/${id}`, formData)) setData(dataObj);
    } else if (await createData('/api/v1/news', formData)) setData(dataObj);
  };

  if (isLoading) {
    return <Loading />;
  }

  return data === null ? (
    <Error />
  ) : (
    <>
      <PageHeader title="Add New Blog" btnLink="/blog" btnText="Go Back" icon="arrow-left" />
      <CardLayout title={id ? 'Update A Blog' : 'Create A New Blog'}>
        <form action="/" encType="multipart/formdata" onSubmit={submitHandler} className="form">
          <div className="mb-3">
            <Input
              type="text"
              id="title"
              name="title"
              placeholder="Enter Post title"
              className=""
              label="Post Title"
              changeHandler={changeHandler}
              value={data.title}
            />
          </div>
          <div className="row mb-3">
            <div className="col-md-6 mb-3">
              <Input
                type="text"
                id="author"
                name="author"
                placeholder="Enter Post author"
                className=""
                label="Post Author"
                changeHandler={changeHandler}
                value={data.author}
              />
            </div>
            <div className="col-md-6 mb-3">
              <Input
                type="text"
                id="category"
                name="category"
                placeholder="Enter Post category"
                className=""
                label="Post category"
                changeHandler={changeHandler}
                value={data.category}
              />
            </div>
          </div>

          <div className="mb-3">
            <Input
              type="file"
              id="coverImage"
              name="coverImage"
              placeholder=""
              className=""
              label="Post Cover Image"
              changeHandler={(e) => setCoverImage(e.target.files[0])}
            />
          </div>

          <div className="pb-4">
            <Textarea
              value={data.content}
              name="content"
              label="Post Content"
              placeholder="Enter post content"
              changeHandler={changeHandler}
            />
          </div>

          <div className="mb-3">
            <Button type="submit">{id ? 'Update' : 'Create'}</Button>
          </div>
        </form>
      </CardLayout>
    </>
  );
}

export default CreateBlog;
