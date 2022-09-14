/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import Input from '../../../reusable/form/Input';

function AddSocialItem({ addSocial, removeSocial, social }) {
  const [data, setData] = useState({
    name: '',
    icon: '',
    url: '',
  });

  const changeHandler = (e) => setData({ ...data, [e.target.name]: e.target.value });

  return (
    <div className=" row mb-4 pt-5">
      <div className="col-lg-7 mb-3">
        <h5 className="text-muted mb-3">Social Site List</h5>
        {social.length <= 0 ? (
          <p>You have not added any social site yet. Please add some social site.</p>
        ) : (
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Url</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {social &&
                social.map((item, i) => (
                  <tr key={Math.random()}>
                    <td>{i + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.url}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() => removeSocial(item.url)}
                      >
                        <i className="fas fa-trash" />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
        <ul className="list-unstyled" />
      </div>
      <div className="col-lg-5 mb-3">
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="Enter social site name"
          className="mb-3"
          label="Enter Social Site Name"
          changeHandler={changeHandler}
          value={data.name}
        />

        <Input
          type="text"
          id="icon"
          name="icon"
          placeholder="Enter fa-icon"
          className="mb-3"
          label="Fontawesome Icon Name"
          changeHandler={changeHandler}
          value={data.icon}
        />

        <Input
          type="text"
          id="url"
          name="url"
          placeholder="Socila site url"
          className="mb-3"
          label="Enter your socila site url"
          changeHandler={changeHandler}
          value={data.url}
        />

        <button type="button" className="btn btn-dark" onClick={() => addSocial(data)}>
          Add
        </button>
      </div>
    </div>
  );
}

export default AddSocialItem;
