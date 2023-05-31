/* eslint-disable no-undef */
import React, { useState } from 'react';
import PageWrapper from '../../common/PageWrapper';
import { data } from '../../../helpers';
import { UserList } from './UserList/insde';
import Button from '../../common/Button';

const MainPage = () => {
  const [listVisible, setListVisible] = useState(false);
  const handler = () => {
    // setListVisible(!listVisible);
    setListVisible((prev) => !prev);
  };

  return (
    <PageWrapper>
      {listVisible && <UserList data={data} />}
      {/* {listVisible ? <UserList data={data} /> : <h2>Empty List</h2>} */}
      <Button title={listVisible ? 'hide list' : 'show list'} onClick={handler} />
    </PageWrapper>
  );
};

export default MainPage;
