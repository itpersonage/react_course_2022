import React from 'react';
import Button from '../../common/Button';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import PageWrapper from '../../common/PageWrapper';

const RegistrationPage = () => (
  <PageWrapper>
    <Form title="Регистрация">
      <Input title="Name" id="name" />
      <Input title="Email" id="email" />
      <Input title="Password" id="password" />
      <Input title="Repeat Password" id="repeatPassword" />
      <Button title="Регистрация" onClick={() => console.log('registration')} />
    </Form>
  </PageWrapper>
);

export default RegistrationPage;
