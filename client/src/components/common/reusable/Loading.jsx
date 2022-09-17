import React from 'react';
import ReactLoading from 'react-loading';

function Loading() {
  return (
    <div className="loading-wrap d-flex justify-content-center align-items-center w-100 vh-100">
      <ReactLoading type="spinningBubbles" color="white" height="70px" width="70px" />
    </div>
  );
}

export default Loading;
