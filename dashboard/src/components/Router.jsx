import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './common/Layout';
import Agent from './pages/agent/Agent';
import CreateAgent from './pages/agent/create-agent/CreateAgent';
import Blog from './pages/blog/Blog';
import ForgetPassword from './pages/forgot-password/ForgotPassword';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Property from './pages/property/Property';
import Register from './pages/register/Register';
import CreateService from './pages/service/create-service/CreateService';
import Service from './pages/service/Service';

function Router() {
  return (
    <Routes>
      <Route
        path=""
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />

      <Route
        path="service"
        element={
          <Layout>
            <Service />
          </Layout>
        }
      />

      <Route
        path="service/create-service"
        element={
          <Layout>
            <CreateService />
          </Layout>
        }
      />

      <Route
        path="service/update-service"
        element={
          <Layout>
            <CreateService />
          </Layout>
        }
      />

      <Route
        path="property"
        element={
          <Layout>
            <Property />
          </Layout>
        }
      />

      <Route
        path="blog"
        element={
          <Layout>
            <Blog />
          </Layout>
        }
      />

      <Route
        path="agent"
        element={
          <Layout>
            <Agent />
          </Layout>
        }
      />

      <Route
        path="agent/create-agent"
        element={
          <Layout>
            <CreateAgent />
          </Layout>
        }
      />

      <Route path="login" element={<Login />} />

      <Route path="signup" element={<Register />} />

      <Route path="forgot-password" element={<ForgetPassword />} />
    </Routes>
  );
}

export default Router;
