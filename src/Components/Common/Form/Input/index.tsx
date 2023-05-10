import React from 'react';
import style from './Input.module.scss';

type InputPropsType = {
  title: string;
  id: string;
};

const Input = ({ title, id }: InputPropsType) => (
  <label className={style.wrapper} htmlFor={id}>
    <span>{title}</span>
    <input id={id} />
  </label>
);

export default Input;
