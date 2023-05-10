import React from 'react';
import style from './PageWrapper.module.scss';
import { Header } from '../Header';
import { Footer } from '../Footer';

export const PageWrapper: React.FC = ({ children }) => {
  return (
    <div className={style.PageWrapper}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
