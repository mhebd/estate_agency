/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react';
import createData from '../../../../utility/createData';
import fetchData from '../../../../utility/fetchData';
import Button from '../../../reusable/Button';
import CardLayout from '../../../reusable/CardLayout';
import Input from '../../../reusable/form/Input';
import Select from '../../../reusable/form/Select';
import Textarea from '../../../reusable/form/Textarea';
import Loading from '../../../reusable/Loading';
import PageHeader from '../../../reusable/PageHeader';

function CreateProperty() {
  const dataObj = {
    name: '',
    description: '',
    price: '',
    amenities: '',
    video: '',
    floorPlans: '',
    lat: '',
    long: '',
    agent: '',
    propertyId: '',
    location: '',
    propertyType: '',
    status: '',
    area: '',
    beds: '',
    bath: '',
    garage: '',
  };

  const [data, setData] = useState(dataObj);
  const [images, setImages] = useState([]);

  const {
    name,
    description,
    price,
    amenities,
    video,
    floorPlans,
    lat,
    long,
    agent,
    propertyId,
    location,
    propertyType,
    status,
    area,
    beds,
    bath,
    garage,
  } = data;

  const changeHandler = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const submitHandler = async (e) => {
    e.preventDefault();

    const propertyData = {
      name,
      description,
      price: Number(price),
      amenities: amenities.split(','),
      floorPlans,
      video,
      agent,
      map: {
        lat,
        long,
      },
      summary: {
        propertyId,
        location,
        propertyType,
        status,
        area: Number(area),
        beds: Number(beds),
        bath: Number(bath),
        garage: Number(garage),
      },
    };
    console.log(propertyData);

    const formData = new FormData();
    formData.append('dataJson', JSON.stringify(propertyData));
    images.forEach((img) => formData.append('images', img));
    // formData.append('floorPlans', floorPlans);

    if (await createData('/api/v1/property', formData)) setData(dataObj);
  };

  const [agents, setAgents] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData(`/api/v1/agent`, setAgents, setIsLoading);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <PageHeader
        title="Add New Property"
        btnLink="/property"
        btnText="Go Back"
        icon="arrow-left"
      />
      <CardLayout title="Create A New Property">
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
              value={name}
            />
          </div>

          <div className="row mb-3">
            <div className="col-lg-4 col-md-6 mb-3">
              <Input
                type="text"
                id="propertyId"
                name="propertyId"
                placeholder="Enter property id"
                className=""
                label="Property ID"
                changeHandler={changeHandler}
                value={propertyId}
              />
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
              <Input
                type="number"
                id="price"
                name="price"
                placeholder="Enter Property price"
                className=""
                label="Property price"
                changeHandler={changeHandler}
                value={price}
              />
            </div>
            <div className="col-lg-4 col-md-12 mb-3">
              <Select
                id="agent"
                name="agent"
                className=""
                label="Property agent"
                changeHandler={changeHandler}
                value={agent}
              >
                {agents && agents.map((a) => <option value={`${a._id}`}>{a.name}</option>)}
              </Select>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-lg-4 col-md-6 mb-3">
              <Input
                type="text"
                id="location"
                name="location"
                placeholder="Enter property location"
                className=""
                label="Property location"
                changeHandler={changeHandler}
                value={location}
              />
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
              <Input
                type="text"
                id="lat"
                name="lat"
                placeholder="Enter Property latitude"
                className=""
                label="Property latitude"
                changeHandler={changeHandler}
                value={lat}
              />
            </div>
            <div className="col-lg-4 col-md-12 mb-3">
              <Input
                type="text"
                id="long"
                name="long"
                placeholder="Enter Property longitude"
                className=""
                label="Property longitude"
                changeHandler={changeHandler}
                value={long}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-lg-4 col-md-6 mb-3">
              <Select
                id="propertyType"
                name="propertyType"
                className=""
                label="Property type"
                changeHandler={changeHandler}
                value={propertyType}
              >
                <option value="House">House</option>
                <option value="Garage">Garage</option>
              </Select>
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
              <Select
                id="status"
                name="status"
                className=""
                label="Property status"
                changeHandler={changeHandler}
                value={status}
              >
                <option value="Rent">Rent</option>
                <option value="Sale">Sale</option>
              </Select>
            </div>
            <div className="col-lg-4 col-md-12 mb-3">
              <Input
                type="number"
                id="area"
                name="area"
                placeholder="Enter Property area"
                className=""
                label="Property area"
                changeHandler={changeHandler}
                value={area}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-lg-4 col-md-6 mb-3">
              <Input
                type="number"
                id="beds"
                name="beds"
                placeholder="Enter property beds"
                className=""
                label="Property beds"
                changeHandler={changeHandler}
                value={beds}
              />
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
              <Input
                type="number"
                id="bath"
                name="bath"
                placeholder="Enter Property bath"
                className=""
                label="Property bath"
                changeHandler={changeHandler}
                value={bath}
              />
            </div>
            <div className="col-lg-4 col-md-12 mb-3">
              <Input
                type="number"
                id="garage"
                name="garage"
                placeholder="Enter Property garage"
                className=""
                label="Property garage"
                changeHandler={changeHandler}
                value={garage}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6 mb-3">
              <label htmlFor="images">Property Images</label>
              <input
                type="file"
                id="images"
                name="images"
                className="form-control"
                multiple
                onChange={(e) => setImages([...e.target.files])}
              />
            </div>
            <div className="col-md-6 mb-3">
              {/* <Input
                type="file"
                id="floorPlans"
                name="floorPlans"
                className=""
                label="Property floor Plans"
                changeHandler={(e) => setFloorPlans(e.target.files[0])}
              /> */}
              <Input
                type="text"
                id="floorPlans"
                name="floorPlans"
                placeholder="Enter property floorPlans"
                className=""
                label="Property floorPlans"
                changeHandler={changeHandler}
                value={floorPlans}
              />
            </div>
          </div>

          <div className="mb-3">
            <Textarea
              value={amenities}
              name="amenities"
              label="Property amenities with ',' separate"
              placeholder="Enter Property amenities"
              changeHandler={changeHandler}
            />
          </div>

          <div className="pb-4">
            <Textarea
              value={description}
              name="description"
              label="Property description"
              placeholder="Enter Property description"
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

export default CreateProperty;
