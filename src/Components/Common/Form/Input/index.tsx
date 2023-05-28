import React, { ChangeEvent } from 'react';
import style from './Input.module.scss';

type InputPropsType = {
  title: string;
  id: string;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  type: 'text' | 'password';
};

const Input = ({ title, id, placeholder, value, setValue, type }: InputPropsType) => {
  const handler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    console.log(`${event.target.id}  -  ${event.target.value}`);
  };
  return (
    <label className={style.wrapper} htmlFor={id}>
      <span>{title}</span>
      <input id={id} placeholder={placeholder} value={value} type={type} onChange={handler} />
    </label>
  );
};

export default Input;
