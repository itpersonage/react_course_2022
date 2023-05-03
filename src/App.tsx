import React from 'react';
import NameComponent from './NameComponent';
import './App.css';
import { Counter } from './Counter';

const App = () => (
  <div className="wrapper">
    <h1>React App</h1>
    <NameComponent fistName="Ivan" lastName="Smirnov" />
    <Counter title="Апельсин" />
    <Counter title="Ананас" />
  </div>
);

export default App;
