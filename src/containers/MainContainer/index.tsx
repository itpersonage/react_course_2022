import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MainPage from '../../components/pages/MainPage';
import makeRequest from '../../network';
import { getUserDataApi } from '../../store/users';

const MainContainer = () => {
  //   useEffect(() => {
  //     makeRequest({ url: '/character' });
  //   }, []);
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      const data = await makeRequest({ url: '/character' });
      dispatch(getUserDataApi(data.results));
    };
    getData();
  }, []);
  return <MainPage />;
};

export default MainContainer;
