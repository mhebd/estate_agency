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
import ProtectedRoutes from './ProtectedRoutes';

function Router() {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/dashboard/service"
          element={
            <Layout>
              <Service />
            </Layout>
          }
        />

        <Route
          path="/dashboard/service/create-service"
          element={
            <Layout>
              <CreateService />
            </Layout>
          }
        />

        <Route
          path="/dashboard/service/update-service"
          element={
            <Layout>
              <CreateService />
            </Layout>
          }
        />

        <Route
          path="/dashboard/property"
          element={
            <Layout>
              <Property />
            </Layout>
          }
        />

        <Route
          path="/dashboard/property/create-property"
          element={
            <Layout>
              <CreateProperty />
            </Layout>
          }
        />

        <Route
          path="/dashboard/property/update-property"
          element={
            <Layout>
              <CreateProperty />
            </Layout>
          }
        />

        <Route
          path="/dashboard/blog"
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />

        <Route
          path="/dashboard/blog/create-post"
          element={
            <Layout>
              <CreateBlog />
            </Layout>
          }
        />

        <Route
          path="/dashboard/blog/update-post"
          element={
            <Layout>
              <CreateBlog />
            </Layout>
          }
        />

        <Route
          path="/dashboard/agent"
          element={
            <Layout>
              <Agent />
            </Layout>
          }
        />

        <Route
          path="/dashboard/agent/create-agent"
          element={
            <Layout>
              <CreateAgent />
            </Layout>
          }
        />

        <Route
          path="/dashboard/testimonial"
          element={
            <Layout>
              <Testimonial />
            </Layout>
          }
        />

        <Route
          path="/dashboard/testimonial/create-testimonial"
          element={
            <Layout>
              <CreateTestimonial />
            </Layout>
          }
        />

        <Route
          path="/dashboard/testimonial/update-testimonial"
          element={
            <Layout>
              <CreateTestimonial />
            </Layout>
          }
        />
      </Route>

      <Route path="/dashboard/login" element={<Login />} />

      <Route path="/dashboard/signup" element={<Register />} />

      <Route path="/dashboard/forgot-password" element={<ForgetPassword />} />
    </Routes>
  );
}

export default Router;
