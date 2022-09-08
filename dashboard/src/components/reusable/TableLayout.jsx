import React from 'react';

function TableLayout({ title, theadList, children }) {
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">{title}</h6>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
            <thead>
              <tr>
                {theadList && theadList.map((th) => <th key={Math.random()}>{th}</th>)}
                <th colSpan={2}>Actions</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                {theadList && theadList.map((th) => <th key={Math.random()}>{th}</th>)}
                <th colSpan="2">Actions</th>
              </tr>
            </tfoot>
            {children}
          </table>
        </div>
      </div>
    </div>
  );
}

export default TableLayout;
