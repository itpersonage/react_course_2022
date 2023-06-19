import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainContainer from './containers/MainContainer';
import AuthContainer from './containers/AuthContainer';
import RegistrationContainer from './containers/RegistrationContainer';
import PageWrapper from './components/common/PageWrapper';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route index element={<MainContainer />} />
        <Route path="auth" element={<AuthContainer />} />
        <Route path="reg" element={<RegistrationContainer />} />
      </Route>
    </Routes>
  );
};

export default App;
