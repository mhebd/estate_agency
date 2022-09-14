import React from 'react';
import ReactLoading from 'react-loading';

function Loading() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
      <ReactLoading type="spokes" color="blue" height={70} width={70} />
    </div>
  );
}

export default Loading;
