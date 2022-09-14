import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import fetchData from '../utility/fetchData';
import Loading from './reusable/Loading';

function ProtectedRoutes({ path, element }) {
  const [user, setUser] = useState(null);
  const [isLoding, setIsLoding] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const fetchUser = await fetchData(`/api/v1/user`);
        setUser(fetchUser.user);
        setIsLoding(false);
      } catch (error) {
        setIsLoding(false);
        localStorage.removeItem('token');
      }
    })();
  }, []);

  useEffect(() => {
    if (user && user?.type !== 'admin') {
      localStorage.removeItem('token');
    }
  }, [user]);

  if (isLoding) {
    return <Loading />;
  }

  return user?.type === 'admin' ? <Outlet /> : <Navigate to="/dashboard/login" replace />;
}

export default ProtectedRoutes;
