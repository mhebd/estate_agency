/* eslint-disable eqeqeq */
import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Button from '../../../reusable/Button';
import CardLayout from '../../../reusable/CardLayout';
import Input from '../../../reusable/form/Input';
import Textarea from '../../../reusable/form/Textarea';
import PageHeader from '../../../reusable/PageHeader';
import AddSocialItem from './AddSocialItem';

function CreateAgent() {
  const [data, setData] = useState({
    name: '',
    email: '',
    biodata: '',
    phone: '',
    mobile: '',
    skype: '',
  });
  const [social, setSocial] = useState([]);
  console.log(social);

  const { name, email, biodata, phone, mobile, skype } = data;

  const changeHandler = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await axios.post(`/api/v1/service`, data, {
      headers: {
        'Content-type': 'application/json',
      },
    });

    console.log(res.data.result);
  };

  const addSocial = (sData) => {
    if (!sData.icon) toast.warn('Social icon name is reauired');
    if (!sData.url) toast.warn('Social url is reauired');
    if (sData.icon && sData.url) {
      // eslint-disable-next-line no-param-reassign
      sData.id = Math.random().toString(16);
      setSocial([...social, sData]);
    }
  };

  const removeSocial = (id) => {
    setSocial(social.filter((s) => s.id != id));
  };
  return (
    <>
      <PageHeader title="Add New Service" btnLink="/service" btnText="Go Back" icon="arrow-left" />
      <CardLayout title="Create A New Service">
        <form action="/" onSubmit={submitHandler} className="form">
          <div className="row mb-3">
            <div className="col-md-6 mb-3">
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Enter agent name"
                className=""
                label="Agent Name"
                changeHandler={changeHandler}
                value={name}
              />
            </div>
            <div className="col-md-6 mb-3">
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Enter agent email"
                className=""
                label="Agent Email"
                changeHandler={changeHandler}
                value={email}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-lg-4 col-md-6 mb-3">
              <Input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter agent phone"
                className=""
                label="Agent Phone Number"
                changeHandler={changeHandler}
                value={phone}
              />
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
              <Input
                type="tel"
                id="mobile"
                name="mobile"
                placeholder="Enter agent mobile"
                className=""
                label="Agent Mobile Number"
                changeHandler={changeHandler}
                value={mobile}
              />
            </div>
            <div className="col-lg-4 col-md-12 mb-3">
              <Input
                type="text"
                id="skype"
                name="skype"
                placeholder="Enter agent skype"
                className=""
                label="Agent Skype Address"
                changeHandler={changeHandler}
                value={skype}
              />
            </div>
          </div>

          <div className="pb-4">
            <Textarea
              value={biodata}
              name="biodata"
              label="About Agent"
              placeholder="Enter agent biodata"
              changeHandler={changeHandler}
            />
          </div>
          <hr />
          <AddSocialItem addSocial={addSocial} removeSocial={removeSocial} social={social} />
          <hr />
          <div className="mb-3">
            <Button type="submit">Create</Button>
          </div>
        </form>
      </CardLayout>
    </>
  );
}

export default CreateAgent;
