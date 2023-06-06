import React, { useEffect, useState } from 'react';
import Button from '../../common/Button';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import PageWrapper from '../../common/PageWrapper';

const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [hasError, setHasError] = useState(false);
  const [hasErrorConfirm, setHasErrorConfirm] = useState(false);

  useEffect(() => {
    if (password.length < 10 && password.length > 0) {
      setHasError(true);
    } else {
      setHasError(false);
    }
  });
  useEffect(() => {
    if (password === repeatPassword) {
      setHasErrorConfirm(false);
    } else if (repeatPassword.length > 0 && password.length !== 0) {
      setHasErrorConfirm(true);
    }
  });
  return (
    <PageWrapper>
      <Form title="Регистрация">
        <Input
          title="Email"
          id="email"
          placeholder="Enter email"
          value={email}
          setValue={setEmail}
          type="text"
        />
        {/* <Input title="Email" id="email" /> */}
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
        <Input
          title="repeat password"
          id="repeat password"
          placeholder="repeatPassword"
          value={repeatPassword}
          setValue={setRepeatPassword}
          type="password"
        />
        {hasErrorConfirm && (
          <div>
            <span>пароли не совпадают</span>
          </div>
        )}
        <Button title="Регистрация" onClick={() => console.log(email, password, repeatPassword)} />
      </Form>
    </PageWrapper>
  );
};

export default RegistrationPage;
