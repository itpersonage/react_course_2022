import React from 'react';
import NameComponent from './NameComponent';
import './App.css';
import { Counter } from './Counter';
import { Form } from './Form';
import { Input } from './input';

const App = () => (
  <div className="wrapper">
    <h1>React App</h1>
    <NameComponent fistName="Ivan" lastName="Smirnov" />
    <Counter title="Апельсин" />
    <Counter title="Ананас" />
    <Form title="Auth">
      <Input />
      <Input />
    </Form>
    <Form title="Reg">
      <Input />
      <Input />
      <Input />
      <Input />
    </Form>
  </div>
);

export default App;
