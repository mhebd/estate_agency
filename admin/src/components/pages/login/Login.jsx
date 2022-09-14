/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import createData from '../../../utility/createData';
import Button from '../../reusable/Button';
import Input from '../../reusable/form/Input';
import LoginFormWrapper from '../../reusable/LoginFormWrapper';

function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const token = localStorage.getItem('token');

  const changeHandler = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await createData(`/api/v1/user/login`, data);
    console.log('res', res);
    if (res.token) {
      localStorage.setItem('token', res.token);
      window.location.reload();
    }
  };

  return token ? (
    <Navigate to="/dashboard" replace />
  ) : (
    <LoginFormWrapper>
      <div className="col-lg-6 d-none d-lg-block bg-login-image" />
      <div className="col-lg-6">
        <div className="p-5">
          <div className="text-center">
            <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
          </div>
          <form className="user" onSubmit={(e) => submitHandler(e)}>
            <div className="form-group mb-3">
              <Input
                type="email"
                name="email"
                className="form-control-user"
                placeholder="Enter Email Address..."
                value={data.email}
                changeHandler={changeHandler}
              />
            </div>
            <div className="form-group mb-3">
              <Input
                type="password"
                name="password"
                className="form-control-user"
                placeholder="Password"
                value={data.password}
                changeHandler={changeHandler}
              />
            </div>
            <div className="form-group mb-3">
              <div className="custom-control custom-checkbox small">
                <input type="checkbox" className="custom-control-input" id="customCheck" />
                <label className="custom-control-label ms-3" htmlFor="customCheck">
                  Remember Me
                </label>
              </div>
            </div>
            <Button type="submit" className="btn-user btn-block">
              Login
            </Button>
            <hr />
            <a href="index.html" className="btn btn-google btn-user btn-block">
              <i className="fab fa-google fa-fw" /> Login with Google
            </a>
            <a href="index.html" className="btn btn-facebook btn-user btn-block">
              <i className="fab fa-facebook-f fa-fw" /> Login with Facebook
            </a>
          </form>
          <hr />
          <div className="text-center">
            <Link className="small" to="/dashboard/forgot-password">
              Forgot Password?
            </Link>
          </div>
          <div className="text-center">
            <Link className="small" to="/dashboard/signup">
              Create an Account!
            </Link>
          </div>
        </div>
      </div>
    </LoginFormWrapper>
  );
}

export default Login;
