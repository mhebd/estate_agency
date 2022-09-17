import React from 'react';
import Pagination from 'react-js-pagination';

function Paginate({ activePage, totalItem, onChange, itemPerPage }) {
  return (
    <div className="container">
      <div className="grid-pagination clearfix my-5">
        <div className="float-right">
          <Pagination
            activePage={activePage}
            itemsCountPerPage={itemPerPage}
            totalItemsCount={totalItem}
            pageRangeDisplayed={5}
            onChange={(n) => onChange(n)}
            itemClass="page-item"
            linkClass="page-link"
          />
        </div>
      </div>
    </div>
  );
}

export default Paginate;
