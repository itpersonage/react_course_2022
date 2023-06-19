import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainContainer from './containers/MainContainer';
import AuthContainer from './containers/AuthContainer';
import RegistrationContainer from './containers/RegistrationContainer';
import PageWrapper from './components/common/PageWrapper';
import OneUserContainer from './containers/OneUserContainer';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route index element={<h1>MAIN PAGE</h1>} />
        <Route path="users" element={<MainContainer />} />
        <Route path="users/:name" element={<OneUserContainer />} />
        <Route path="auth" element={<AuthContainer />} />
        <Route path="reg" element={<RegistrationContainer />} />
        <Route path="*" element={<h1>NOT FOUND</h1>} />
      </Route>
    </Routes>
  );
};

export default App;
