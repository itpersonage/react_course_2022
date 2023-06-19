/* eslint-disable no-undef */
import React, { useState } from 'react';
import { data } from '../../../helpers';
import { UserList } from './UserList/insde';
import Button from '../../common/Button';

const MainPage = () => {
  const [listVisible, setListVisible] = useState(true);
  const handler = () => {
    // setListVisible(!listVisible);
    setListVisible((prev) => !prev);
  };

  return (
    <>
      {listVisible && <UserList data={data} />}
      {/* {listVisible ? <UserList data={data} /> : <h2>Empty List</h2>} */}
      <Button title={listVisible ? 'hide list' : 'show list'} onClick={handler} />
    </>
  );
};

export default MainPage;
