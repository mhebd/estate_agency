/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function HeaderSerchBox({ showSearchBox, closeSearchBox }) {
  return (
    <div className={`search-box-wrapper ${showSearchBox ? 'search-box' : ''}`}>
      <div className="serch-box-header section-header">
        <h2 className="heading">Search Property</h2>
        <div className="h-border-bottom" />
        <button type="button" id="btn-close" onClick={(e) => closeSearchBox(e)}>
          <i className="fas fa-times" />
        </button>
      </div>

      <div className="search-form-wrapper">
        <div className="container">
          <form action="">
            <div className="form-group">
              <label htmlFor="">Keyword</label>
              <input type="text" className="form-control" placeholder="keyword" />
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="">Type</label>
                  <select name="" id="type" className="form-control">
                    <option value="">All Type</option>
                    <option value="">For Rent</option>
                    <option value="">For Sell</option>
                    <option value="">Open House</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="">City</label>
                  <select name="" id="" className="form-control">
                    <option value="">All City</option>
                    <option value="">Dhaka</option>
                    <option value="">Kushtia</option>
                    <option value="">Khulna</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="">Bedrooms</label>
                  <select name="" id="" className="form-control">
                    <option value="">Any</option>
                    <option value="">01</option>
                    <option value="">02</option>
                    <option value="">03</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="">Garages</label>
                  <select name="" id="" className="form-control">
                    <option value="">Any</option>
                    <option value="">01</option>
                    <option value="">02</option>
                    <option value="">03</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="">Bathrooms</label>
                  <select name="" id="" className="form-control">
                    <option value="">Any</option>
                    <option value="">01</option>
                    <option value="">02</option>
                    <option value="">03</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="">Min Price</label>
                  <select name="" id="" className="form-control">
                    <option value="">Unlimite</option>
                    <option value="">$50,000</option>
                    <option value="">$100,000</option>
                    <option value="">$150,000</option>
                    <option value="">$200,000</option>
                  </select>
                </div>
              </div>
            </div>

            <button type="button" className="btn btn-success search-submit">
              Search Property
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HeaderSerchBox;
