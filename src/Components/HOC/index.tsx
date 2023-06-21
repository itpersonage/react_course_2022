/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthHOC: React.FC = ({ children }) => {
  const isAuth = false;

  if (isAuth) {
    return <>{children}</>;
  }
  return <Navigate to="/auth" />;
};

export default AuthHOC;
