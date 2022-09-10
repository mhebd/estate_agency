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

function CreateTestimonial() {
  const dataObj = {
    name: '',
    opinion: '',
  };
  const [data, setData] = useState(dataObj);
  const [avatar, setAvatar] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const { id } = queryString.parse(useLocation().search);

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      (async () => {
        setData(await fetchData(`/api/v1/testimonial/${id}`));
        setIsLoading(false);
      })();
    }
  }, [id]);

  const changeHandler = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('dataJson', JSON.stringify(data));
    if (avatar) formData.append('avatar', avatar);

    if (id) {
      if (await updateData(`/api/v1/testimonial/${id}`, formData)) setData(dataObj);
    } else if (await createData('/api/v1/testimonial', formData)) setData(dataObj);
  };

  if (isLoading) {
    return <Loading />;
  }

  return data === null ? (
    <Error />
  ) : (
    <>
      <PageHeader
        title={id ? 'Update A Testimonial' : 'Create A New Testimonial'}
        btnLink="/testimonial"
        btnText="Go Back"
        icon="arrow-left"
      />
      <CardLayout title={id ? 'Update A Testimonial' : 'Create A New Testimonial'}>
        <form action="/" encType="multipart/formdata" onSubmit={submitHandler} className="form">
          <div className="mb-3">
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Enter agent name"
              className=""
              label="Agent Name"
              changeHandler={changeHandler}
              value={data.name}
            />
          </div>

          <div className="mb-3">
            <Input
              type="file"
              id="avatar"
              name="avatar"
              placeholder=""
              className=""
              label="Agent Avatar"
              changeHandler={(e) => setAvatar(e.target.files[0])}
            />
          </div>

          <div className="pb-4">
            <Textarea
              value={data.opinion}
              name="opinion"
              label="Client Opinion"
              placeholder="Enter Client Opinion"
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

export default CreateTestimonial;
