/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable eqeqeq */
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { useLocation } from 'react-router-dom';
import createData from '../../../../utility/createData';
import fetchData from '../../../../utility/fetchData';
import getHtmlToDraft from '../../../../utility/getHtmlToDraft';
import updateData from '../../../../utility/updateData';
import Button from '../../../reusable/Button';
import CardLayout from '../../../reusable/CardLayout';
import Input from '../../../reusable/form/Input';
import Select from '../../../reusable/form/Select';
import Textarea from '../../../reusable/form/Textarea';
import Loading from '../../../reusable/Loading';
import PageHeader from '../../../reusable/PageHeader';
import Error from '../../not-found/Error';

function CreateProperty() {
  const dataObj = {
    name: '',
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
  const [agents, setAgents] = useState(null);
  const [description, setDescription] = useState(EditorState.createEmpty());
  const [isLoading, setIsLoading] = useState(false);

  const {
    name,
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

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const fethcAgent = await fetchData(`/api/v1/agent`);
      setAgents(fethcAgent.data);
      setIsLoading(false);
    })();
  }, []);

  const { id } = queryString.parse(useLocation().search);

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      (async () => {
        const fetchProp = await fetchData(`/api/v1/property/${id}`);
        setData({
          ...fetchProp.data,
          ...fetchProp.data.map,
          ...fetchProp.data.summary,
          amenities: fetchProp.data.amenities.join(','),
          agent: fetchProp.data.agent?._id,
        });
        setDescription(getHtmlToDraft(fetchProp.data?.description));
        setIsLoading(false);
      })();
    }
  }, [id]);

  const changeHandler = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const onEditorStateChange = (state) => setDescription(state);

  const submitHandler = async (e) => {
    e.preventDefault();

    const propertyData = {
      name,
      description: draftToHtml(convertToRaw(description.getCurrentContent())),
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

    const formData = new FormData();
    formData.append('dataJson', JSON.stringify(propertyData));
    if (images) images.forEach((img) => formData.append('images', img));
    // formData.append('floorPlans', floorPlans);

    if (id) {
      if (await updateData(`/api/v1/property/${id}`, formData));
    } else if (await createData('/api/v1/property', formData)) setData(dataObj);
  };

  if (isLoading) {
    return <Loading />;
  }

  return data === null ? (
    <Error />
  ) : (
    <>
      <PageHeader
        title="Add New Property"
        btnLink="/dashboard/property"
        btnText="Go Back"
        icon="arrow-left"
      />
      <CardLayout title={id ? 'Update A Property' : 'Create A New Property'}>
        <form action="/" encType="multipart/formdata" onSubmit={submitHandler} className="form">
          <div className="mb-4">
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

          <div className="row mb-4">
            <div className="col-lg-4 col-md-6 mb-4">
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
            <div className="col-lg-4 col-md-6 mb-4">
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
            <div className="col-lg-4 col-md-12 mb-4">
              <Select
                id="agent"
                name="agent"
                className=""
                label="Property agent"
                changeHandler={changeHandler}
                value={agent}
              >
                {agents &&
                  agents.map((a) => (
                    <option key={Math.random()} value={`${a._id}`}>
                      {a.name}
                    </option>
                  ))}
              </Select>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-lg-4 col-md-6 mb-4">
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
            <div className="col-lg-4 col-md-6 mb-4">
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
            <div className="col-lg-4 col-md-12 mb-4">
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

          <div className="row mb-4">
            <div className="col-lg-4 col-md-6 mb-4">
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
            <div className="col-lg-4 col-md-6 mb-4">
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
            <div className="col-lg-4 col-md-12 mb-4">
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

          <div className="row mb-4">
            <div className="col-lg-4 col-md-6 mb-4">
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
            <div className="col-lg-4 col-md-6 mb-4">
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
            <div className="col-lg-4 col-md-12 mb-4">
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

          <div className="row mb-4">
            <div className="col-md-6 mb-4">
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
            <div className="col-md-6 mb-4">
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

          <div className="mb-4">
            <Textarea
              value={amenities}
              name="amenities"
              label="Property amenities with ',' separate"
              placeholder="Enter Property amenities"
              changeHandler={changeHandler}
            />
          </div>

          <div className="my-5">
            <Editor
              editorState={description}
              onEditorStateChange={onEditorStateChange}
              wrapperClassName="editor-wrap"
              editorClassName="editor"
            />
          </div>

          <div className="mb-4">
            <Button type="submit">{id ? 'Update' : 'Create'}</Button>
          </div>
        </form>
      </CardLayout>
    </>
  );
}

export default CreateProperty;
