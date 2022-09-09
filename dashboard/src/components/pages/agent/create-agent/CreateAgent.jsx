/* eslint-disable eqeqeq */
import { queryString } from 'query-string';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import createData from '../../../../utility/createData';
import fetchData from '../../../../utility/fetchData';
import Button from '../../../reusable/Button';
import CardLayout from '../../../reusable/CardLayout';
import Input from '../../../reusable/form/Input';
import Textarea from '../../../reusable/form/Textarea';
import PageHeader from '../../../reusable/PageHeader';
import AddSocialItem from './AddSocialItem';

function CreateAgent() {
  const dataObj = {
    name: '',
    email: '',
    biodata: '',
    phone: '',
    mobile: '',
    skype: '',
  };
  const [data, setData] = useState(dataObj);
  const [social, setSocial] = useState([]);
  const [avatar, setAvatar] = useState();

  const { name, email, biodata, phone, mobile, skype } = data;

  const { ID } = queryString.parse(useLocation().search);

  useEffect(() => {
    if (ID) {
      fetchData(`/api/v1/service/${ID}`, setData, null);
    }
  }, [ID]);

  const changeHandler = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const submitHandler = async (e) => {
    e.preventDefault();

    const agentData = {
      name,
      email,
      biodata,
      contact: {
        phone,
        mobile,
        skype,
      },
      social,
    };

    const formData = new FormData();
    formData.append('dataJson', JSON.stringify(agentData));
    formData.append('avatar', avatar);

    if (await createData('/api/v1/agent', formData)) setData(dataObj);
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
      <PageHeader title="Add New Agent" btnLink="/agent" btnText="Go Back" icon="arrow-left" />
      <CardLayout title="Create A New Agent">
        <form action="/" encType="multipart/formdata" onSubmit={submitHandler} className="form">
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
