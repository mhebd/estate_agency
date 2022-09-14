/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Pagination from 'react-js-pagination';

function Paginate({ perPageItem, setPerPageItem, activePage, setActivePage, totalItem }) {
  return (
    <div className="row">
      <div className="col-md-6 mb-3 d-flex">
        <form action="">
          <div className="input-group">
            <label htmlFor="" className="mr-2">
              Per Page
            </label>
            <select
              name="per-page"
              value={perPageItem}
              onChange={(e) => setPerPageItem(e.target.value)}
              id=""
            >
              <option value="5">05</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="30">30</option>
            </select>
          </div>
        </form>
        <p className="ms-3">
          Showing Result {perPageItem * (activePage - 1) + 1} - {perPageItem * activePage}
        </p>
      </div>
      <div className="col-md-6 mb-3 d-flex justify-content-end">
        <Pagination
          activePage={activePage}
          itemsCountPerPage={perPageItem * 1}
          totalItemsCount={totalItem}
          pageRangeDisplayed={5}
          onChange={(n) => setActivePage(n)}
          itemClass="page-item"
          linkClass="page-link"
        />
      </div>
    </div>
  );
}

export default Paginate;
