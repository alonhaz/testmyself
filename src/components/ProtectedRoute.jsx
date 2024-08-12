import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
  return localStorage.getItem('authenticated') === 'true';
};

const ProtectedRoute = ({ children }) => {
  const auth = isAuthenticated();
  console.log('ProtectedRoute: Is authenticated:', auth);

  return auth ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
