import React from 'react';
import { Navigate } from 'react-router-dom';
import SessionStorageManager from './SessionStorageManager';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const sessionStorageManager = new SessionStorageManager();
  const token = sessionStorageManager.getToken();

  return token ? <>{children}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;
