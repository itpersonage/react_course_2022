import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import PasswordInput from '../../common/Form/PasswordInput';
import { setUserData } from '../../../store/auth';
import { TState } from '../../../store/configureStore';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state: TState) => state.userData);

  const submitHandler = () => {
    if (password.length > 0 && hasError === false) {
      dispatch(setUserData({ email, password, token: 'OK' }));
      console.log(data);
    }
  };

  useEffect(() => {
    if (password.length < 10 && password.length > 0) {
      setHasError(true);
    } else {
      setHasError(false);
    }
  }, [password]);

  useEffect(() => {
    if (data.email) {
      navigate('/');
    }
  });

  return (
    <Form title="Авторизация">
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

      <Button title="Войти" onClick={submitHandler} />
    </Form>
  );
};

export default AuthPage;
