/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { TState } from '../../store/configureStore';

const AuthHOC: React.FC = ({ children }) => {
  const isAuth = useSelector((state: TState) => state.userData.email);
  // есть доступ к обернутой странице или нет

  if (isAuth) {
    return <>{children}</>;
  }
  return <Navigate to="/auth" />;
};

export default AuthHOC;
