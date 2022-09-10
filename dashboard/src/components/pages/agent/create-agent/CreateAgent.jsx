/* eslint-disable no-underscore-dangle */
/* eslint-disable eqeqeq */
import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
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
  const [isLoading, setIsLoading] = useState(false);

  const { name, email, biodata, phone, mobile, skype } = data;

  const { aid } = queryString.parse(useLocation().search);

  useEffect(() => {
    if (aid) {
      setIsLoading(true);
      (async () => {
        const fetchAgent = await fetchData(`/api/v1/agent/${aid}`);
        if (fetchAgent) {
          setData({ ...fetchAgent, ...fetchAgent.contact });
          setSocial(fetchAgent.social);
        }
        setIsLoading(false);
      })();
    }
  }, [aid]);

  console.log(data, avatar);

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

    console.log('agentData', agentData);

    const formData = new FormData();
    formData.append('dataJson', JSON.stringify(agentData));
    if (avatar) formData.append('avatar', avatar);

    if (aid) {
      if (await updateData(`/api/v1/agent/${aid}`, formData)) setData(dataObj);
    } else if (await createData('/api/v1/agent', formData)) setData(dataObj);
  };

  const addSocial = (sData) => {
    if (!sData.icon) toast.warn('Social icon name is reauired');
    if (!sData.url) toast.warn('Social url is reauired');
    if (sData.icon && sData.url) {
      // eslint-disable-next-line no-param-reassign
      setSocial([...social, sData]);
    }
  };

  const removeSocial = (url) => {
    setSocial(social.filter((s) => s.url != url));
  };

  if (aid && isLoading) {
    return <Loading />;
  }

  return data === null ? (
    <Error />
  ) : (
    <>
      <PageHeader title="Add New Agent" btnLink="/agent" btnText="Go Back" icon="arrow-left" />
      <CardLayout title={aid ? 'Update A Agent' : 'Create New Agent'}>
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
            <Button type="submit">{aid ? 'Update' : 'Create'}</Button>
          </div>
        </form>
      </CardLayout>
    </>
  );
}

export default CreateAgent;
