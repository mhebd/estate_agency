/* eslint-disable eqeqeq */
import React, { useState } from 'react';
import createData from '../../../../utility/createData';
import Button from '../../../reusable/Button';
import CardLayout from '../../../reusable/CardLayout';
import Input from '../../../reusable/form/Input';
import Textarea from '../../../reusable/form/Textarea';
import PageHeader from '../../../reusable/PageHeader';

function CreateTestimonial() {
  const dataObj = {
    name: '',
    opinion: '',
  };
  const [data, setData] = useState(dataObj);
  const [avatar, setAvatar] = useState();

  const changeHandler = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('dataJson', JSON.stringify(data));
    formData.append('avatar', avatar);

    if (await createData('/api/v1/testimonial', formData)) setData(dataObj);
  };

  return (
    <>
      <PageHeader
        title="Add New Testimonial"
        btnLink="/testimonial"
        btnText="Go Back"
        icon="arrow-left"
      />
      <CardLayout title="Create A New Testimonial">
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
            <Button type="submit">Create</Button>
          </div>
        </form>
      </CardLayout>
    </>
  );
}

export default CreateTestimonial;
