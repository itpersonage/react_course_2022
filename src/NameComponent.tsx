import React, { SyntheticEvent } from 'react';
import './App.css';

type NameComponentPropsType = {
  fistName: string;
  lastName: string;
};

const NameComponent = (props: NameComponentPropsType) => {
  const { fistName, lastName } = props;

  const heandler = (event: SyntheticEvent) => {
    console.log(event.currentTarget, 'currentTarget');
    console.log(event.target, 'target');
  };

  const mainHeandler = (event: SyntheticEvent) => {
    console.log(event.currentTarget, 'currentTarget');
    console.log(event.target, 'target');
  };

  return (
    <div role="presentation" onClick={mainHeandler} className="name_wrapper">
      <p className="text">{fistName}</p>
      <p className="text">{lastName}</p>
      <button type="button" onClick={heandler}>
        click me
      </button>
    </div>
  );
};

export default NameComponent;
