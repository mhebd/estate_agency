import React from 'react';

function TableLayout({ theadList, children }) {
  return (
    <div className="table-responsive">
      <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
        <thead>
          <tr>
            {theadList && theadList.map((th) => <th key={Math.random()}>{th}</th>)}
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        {children}
      </table>
    </div>
  );
}

export default TableLayout;
