import React, { useEffect } from 'react';
import MainPage from '../../components/pages/MainPage';
import { getUser } from '../../store/users';
import { useAppDispatch } from '../../store/users/selectors';

const MainContainer = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);
  return <MainPage />;
};

export default MainContainer;
