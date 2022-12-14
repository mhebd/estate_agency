import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserLayout from './common/layout/UserLayout';
import About from './pages/about/About';
import Agent from './pages/agent/Agent';
import AgentSingle from './pages/agent/agent-single/AgentSingle';
import Blog from './pages/blog/Blog';
import BlogSingle from './pages/blog/blog-single/BlogSingle';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import NotFound from './pages/not-found/NotFound';
import Property from './pages/property/Property';
import PropertySingle from './pages/property/property-single/PropertySingle';

function Router() {
  return (
    <Routes>
      <Route
        path=""
        element={
          <UserLayout>
            <Home />
          </UserLayout>
        }
      />

      <Route
        path="about"
        element={
          <UserLayout>
            <About />
          </UserLayout>
        }
      />

      <Route
        path="property"
        element={
          <UserLayout>
            <Property />
          </UserLayout>
        }
      />

      <Route
        path="blog"
        element={
          <UserLayout>
            <Blog />
          </UserLayout>
        }
      />

      <Route
        path="contact"
        element={
          <UserLayout>
            <Contact />
          </UserLayout>
        }
      />

      <Route
        path="/agent"
        element={
          <UserLayout>
            <Agent />
          </UserLayout>
        }
      />

      <Route
        path="/agent/:agentId"
        element={
          <UserLayout>
            <AgentSingle />
          </UserLayout>
        }
      />

      <Route
        path="/blog/:blogId"
        element={
          <UserLayout>
            <BlogSingle />
          </UserLayout>
        }
      />

      <Route
        path="/property/:propertyId"
        element={
          <UserLayout>
            <PropertySingle />
          </UserLayout>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
