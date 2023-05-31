import React, { useEffect, useState } from 'react';
import Button from '../../common/Button';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import PageWrapper from '../../common/PageWrapper';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);
  const submitHandler = () => {
    console.log(email, password);
  };
  useEffect(() => {
    if (password.length < 10 && password.length > 0) {
      setHasError(true);
    } else {
      setHasError(false);
    }
  }, [password]);

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
        {hasError && (
          <div>
            <span> пароль должен быть больше 10 символов</span>
          </div>
        )}

        <Button title="Войти" onClick={submitHandler} />
      </Form>
    </PageWrapper>
  );
};

export default AuthPage;
