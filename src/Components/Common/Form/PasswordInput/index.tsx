/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/style-prop-object */
import React, { ChangeEvent, useState } from 'react';
import style from '../Input/Input.module.scss';

type PasswordInputPropsType = {
  title: string;
  id?: string;
  placeholder?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const PasswordInput = ({ title, id, placeholder, value, setValue }: PasswordInputPropsType) => {
  const handler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    // console.log(`${event.target.id}  -  ${event.target.value}`);
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  const changeVisiblePassword = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <label className={style.wrapper} htmlFor={id}>
      <span>{title}</span>
      <input
        id={id}
        // placeholder={placeholder}
        value={value}
        type={passwordVisible ? 'text' : 'password'}
        onChange={handler}
      />
      {passwordVisible ? (
        <button type="button" onClick={changeVisiblePassword}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 95 95"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 4L90.6126 90.6126"
              stroke="black"
              stroke-width="7.21771"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M40.0885 40.9395C38.5911 42.6356 37.6826 44.8644 37.6826 47.305C37.6826 52.6196 41.9911 56.9286 47.3062 56.9286C49.7468 56.9286 51.9751 56.0201 53.6718 54.5227"
              stroke="black"
              stroke-width="7.21771"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M24.9884 25.9492C16.8957 31.6203 10.154 39.6999 4 47.3084C13.0874 61.7005 29.4145 76.1792 47.3063 76.1792C54.7641 76.1792 61.9505 73.6636 68.4537 69.6871"
              stroke="black"
              stroke-width="7.21771"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M47.3063 18.4355C66.5939 18.4355 79.5526 33.6322 90.6126 47.3064C89.08 49.733 87.342 52.1625 85.4254 54.5241"
              stroke="black"
              stroke-width="7.21771"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      ) : (
        <button type="button" onClick={changeVisiblePassword}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 95 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M47.5831 42.1662C52.8982 42.1662 57.2067 37.8577 57.2067 32.5426C57.2067 27.2274 52.8982 22.9189 47.5831 22.9189C42.268 22.9189 37.9595 27.2274 37.9595 32.5426C37.9595 37.8577 42.268 42.1662 47.5831 42.1662Z"
              stroke="black"
              stroke-width="7.21771"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M90.8894 32.5427C81.8018 46.9348 65.4749 61.4136 47.5831 61.4136C29.6914 61.4136 13.3642 46.9348 4.27686 32.5427C15.337 18.8688 28.2956 3.67188 47.5831 3.67188C66.8708 3.67188 79.8295 18.8685 90.8894 32.5427Z"
              stroke="black"
              stroke-width="7.21771"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      )}
    </label>
  );
};

export default PasswordInput;
