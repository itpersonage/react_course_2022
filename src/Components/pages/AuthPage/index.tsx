import React, { useState } from 'react';
import Button from '../../common/Button';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import PageWrapper from '../../common/PageWrapper';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <PageWrapper>
      <Form title="Авторизация">
        <Input
          title="Email"
          id="email"
          placeholder="Enter email"
          value={email}
          setValue={setEmail}
          type="text"
        />
        <Input
          title="Password"
          id="password"
          placeholder="Enter password"
          value={password}
          setValue={setPassword}
          type="password"
        />
        <Button title="Войти" onClick={() => console.log('auth')} />
      </Form>
    </PageWrapper>
  );
};

export default AuthPage;
