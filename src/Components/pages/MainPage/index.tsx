/* eslint-disable no-undef */
import React from 'react';
import PageWrapper from '../../common/PageWrapper';
import { data } from '../../../helpers';
import { UserList } from './UserList/insde';

const MainPage = () => (
  <PageWrapper>
    <UserList data={data} />
  </PageWrapper>
);

export default MainPage;
