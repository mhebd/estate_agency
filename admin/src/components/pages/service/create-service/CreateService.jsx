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

function CreateService() {
  const fields = {
    title: '',
    details: '',
  };
  const [data, setData] = useState(fields);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = queryString.parse(useLocation().search);

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      (async () => {
        const fetchService = await fetchData(`/api/v1/service/${id}`);
        setData(fetchService.data);
        setIsLoading(false);
      })();
    }
  }, [id]);

  const changeHandler = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const submitHandler = async (e) => {
    e.preventDefault();
    if (id) {
      if (await updateData(`/api/v1/service/${id}`, data));
    } else if (await createData('/api/v1/service', data)) setData(fields);
  };

  if (isLoading) {
    return <Loading />;
  }

  return data === null ? (
    <Error />
  ) : (
    <>
      <PageHeader
        title={id ? 'Update  A Service' : 'Add New Service'}
        btnLink="/dashboard/service"
        btnText="Go Back"
        icon="arrow-left"
      />
      <div className="row">
        <div className="col-md-8 mx-auto">
          <CardLayout title={id ? 'Update A Service' : 'Create A New Service'}>
            <form action="/" onSubmit={submitHandler} className="form">
              <div className="mb-3">
                <Input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Enter service name"
                  className=""
                  label="Service Title"
                  changeHandler={changeHandler}
                  value={data.title}
                />
              </div>
              <div className="mb-3">
                <Textarea
                  value={data.details}
                  name="details"
                  label="Service Details"
                  placeholder="Enter Service Details"
                  changeHandler={changeHandler}
                />
              </div>
              <div className="mb-3">
                <Button type="submit">{id ? 'Update' : 'Create'}</Button>
              </div>
            </form>
          </CardLayout>
        </div>
      </div>
    </>
  );
}

export default CreateService;
