import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Implement your authentication check logic
  const isAuthenticated = true; // Adjust this logic as needed

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
