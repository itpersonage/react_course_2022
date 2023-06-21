import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainContainer from './containers/MainContainer';
import AuthContainer from './containers/AuthContainer';
import RegistrationContainer from './containers/RegistrationContainer';
import PageWrapper from './components/common/PageWrapper';
import OneUserContainer from './containers/OneUserContainer';
import AuthHOC from './components/HOC';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route
          index
          element={
            <AuthHOC>
              <h1>MAIN PAGE</h1>
            </AuthHOC>
          }
        />
        <Route
          path="users"
          element={
            <AuthHOC>
              <MainContainer />
            </AuthHOC>
          }
        />
        <Route
          path="users/:name"
          element={
            <AuthHOC>
              <OneUserContainer />
            </AuthHOC>
          }
        />
        <Route path="auth" element={<AuthContainer />} />
        <Route path="reg" element={<RegistrationContainer />} />
        <Route path="*" element={<h1>NOT FOUND</h1>} />
      </Route>
    </Routes>
  );
};

export default App;
