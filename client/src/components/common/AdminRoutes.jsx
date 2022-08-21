import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Admin from '../pages/dashboard/Admin';

function AdminRoutes() {
  return (
    <Routes>
      <Route path="posts" element={<Admin />} />
    </Routes>
  );
}

export default AdminRoutes;
