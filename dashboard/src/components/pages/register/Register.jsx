import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../reusable/Button';
import Input from '../../reusable/form/Input';
import LoginFormWrapper from '../../reusable/LoginFormWrapper';

function Register() {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = data;

  const changeHandler = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await axios.post(`/api/v1/user/signup`, data, {
      headers: { 'Content-Type': 'Application/json' },
    });
    console.log(res.data.result);
    localStorage.setItem('token', res.data.result.token);
  };

  return (
    <LoginFormWrapper>
      <div className="col-lg-5 d-none d-lg-block bg-register-image" />
      <div className="col-lg-7">
        <div className="p-5">
          <div className="text-center">
            <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
          </div>
          <form className="user" onSubmit={(e) => submitHandler(e)}>
            <div className="form-group mb-3">
              <Input
                type="text"
                name="name"
                className="form-control-user"
                id="exampleFirstName"
                placeholder="First Name"
                value={name}
                changeHandler={changeHandler}
              />
            </div>
            <div className="form-group mb-3">
              <Input
                type="email"
                name="email"
                className="form-control-user"
                id="exampleInputEmail"
                placeholder="Email Address"
                value={email}
                changeHandler={changeHandler}
              />
            </div>
            <div className="form-group row mb-3">
              <div className="col-sm-6 mb-3 mb-sm-0">
                <Input
                  type="password"
                  name="password"
                  className="form-control-user"
                  id="exampleInputPassword"
                  placeholder="Password"
                  value={password}
                  changeHandler={changeHandler}
                />
              </div>
              <div className="col-sm-6">
                <Input
                  type="password"
                  name="password2"
                  className="form-control-user"
                  id="exampleRepeatPassword"
                  placeholder="Repeat Password"
                  value={password2}
                  changeHandler={changeHandler}
                />
              </div>
            </div>
            <Button type="submit" className="btn-user btn-block">
              Register Account
            </Button>
            <hr />
            <a href="index.html" className="btn btn-google btn-user btn-block">
              <i className="fab fa-google fa-fw" /> Register with Google
            </a>
            <a href="index.html" className="btn btn-facebook btn-user btn-block">
              <i className="fab fa-facebook-f fa-fw" /> Register with Facebook
            </a>
          </form>
          <hr />
          <div className="text-center">
            <Link className="small" to="/forgot-password">
              Forgot Password?
            </Link>
          </div>
          <div className="text-center">
            <Link className="small" to="/login">
              Already have an account? Login!
            </Link>
          </div>
        </div>
      </div>
    </LoginFormWrapper>
  );
}

export default Register;
