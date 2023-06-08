import React, { useEffect, useState } from 'react';
import Button from '../../common/Button';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import PageWrapper from '../../common/PageWrapper';
import PasswordInput from '../../common/Form/PasswordInput';

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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
    if (password === confirmPassword) {
      setHasErrorConfirm(false);
    } else if (confirmPassword.length > 0 && password.length !== 0) {
      setHasErrorConfirm(true);
    }
  });

  return (
    <PageWrapper>
      <Form title="Регистрация">
        <Input
          title="Name"
          id="Name"
          placeholder="Enter name"
          value={name}
          setValue={setName}
          type="text"
        />
        <Input
          title="Email"
          id="email"
          placeholder="Enter email"
          value={email}
          setValue={setEmail}
          type="text"
        />
        <PasswordInput
          title="Password"
          id="password"
          placeholder="Enter password"
          value={password}
          setValue={setPassword}
        />
        {hasError && (
          <div>
            <span> пароль должен быть больше 10 символов</span>
          </div>
        )}
        <PasswordInput
          title="repeat password"
          id="repeat password"
          placeholder="repeatPassword"
          value={confirmPassword}
          setValue={setConfirmPassword}
        />

        {hasErrorConfirm && (
          <div>
            <span>пароли не совпадают</span>
          </div>
        )}
        <Button
          title="Регистрация"
          onClick={() => console.log(name, email, password, confirmPassword)}
        />
      </Form>
    </PageWrapper>
  );
};

export default RegistrationPage;
