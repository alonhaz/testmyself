import React from 'react';
import { Navigate } from 'react-router-dom';

// Replace this with your actual authentication logic
const isAuthenticated = () => {
  // Example: return true if user is authenticated, otherwise false
  // You can use context or a state management library to check authentication status
  return false; // Change this as needed
};

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
