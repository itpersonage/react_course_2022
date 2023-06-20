/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { data } from '../../../helpers';
import { UserList } from './UserList/insde';
import Button from '../../common/Button';

const MainPage = () => {
  const { state } = useLocation() as { state: { isOpen: boolean } };

  const [listVisible, setListVisible] = useState(false);
  const handler = () => {
    // setListVisible(!listVisible);
    setListVisible((prev) => !prev);
  };

  useEffect(() => {
    if (state?.isOpen) {
      setListVisible(true);
    }
  }, []);

  return (
    <>
      {listVisible && <UserList data={data} />}
      {/* {listVisible ? <UserList data={data} /> : <h2>Empty List</h2>} */}
      <Button title={listVisible ? 'hide list' : 'show list'} onClick={handler} />
    </>
  );
};

export default MainPage;
