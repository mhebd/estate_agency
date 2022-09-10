import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './common/Layout';
import Agent from './pages/agent/Agent';
import CreateAgent from './pages/agent/create-agent/CreateAgent';
import Blog from './pages/blog/Blog';
import CreateBlog from './pages/blog/create-blog/CreateBlog';
import ForgetPassword from './pages/forgot-password/ForgotPassword';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import CreateProperty from './pages/property/create-property/CreateProperty';
import Property from './pages/property/Property';
import Register from './pages/register/Register';
import CreateService from './pages/service/create-service/CreateService';
import Service from './pages/service/Service';
import CreateTestimonial from './pages/testimonial/create-testimonial/CreateTestimonial';
import Testimonial from './pages/testimonial/Testimonial';

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
        path="property/create-property"
        element={
          <Layout>
            <CreateProperty />
          </Layout>
        }
      />

      <Route
        path="property/update-property"
        element={
          <Layout>
            <CreateProperty />
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
        path="blog/create-post"
        element={
          <Layout>
            <CreateBlog />
          </Layout>
        }
      />

      <Route
        path="blog/update-post"
        element={
          <Layout>
            <CreateBlog />
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

      <Route
        path="testimonial"
        element={
          <Layout>
            <Testimonial />
          </Layout>
        }
      />

      <Route
        path="testimonial/create-testimonial"
        element={
          <Layout>
            <CreateTestimonial />
          </Layout>
        }
      />

      <Route
        path="testimonial/update-testimonial"
        element={
          <Layout>
            <CreateTestimonial />
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
