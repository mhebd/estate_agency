import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center vw-100 mv-100"
      style={{ height: '100vh' }}
    >
      <p className="display-1 text-danger">Oops!</p>
      <p className="lead text-muted">Something went wrong!</p>
      <p className="">
        Go back to <Link to="/">Home</Link> or try something others
      </p>
    </div>
  );
}

export default NotFound;
