import React from 'react';
import style from './MainPage.module.scss';
import { PageWrapper } from '../../Common/PageWrapper';

export const MainPage = () => {
  return (
    <PageWrapper>
      <div className={style.content}>
        <h1>Main</h1>
      </div>
    </PageWrapper>
  );
};
