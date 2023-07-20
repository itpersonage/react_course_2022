import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

type OneUserPropsType = {
  userInfo:
    | {
        id: number;
        name: string;
        email: string;
        phone: string;
      }
    | undefined;
};

const OneUserPage = ({ userInfo }: OneUserPropsType) => {
  const navigate = useNavigate();
  const handler = () => {
    navigate('/users', { state: { isOpen: true } });
    // можно передать { state: { isOpen: true }, replace } чтобы не писалась история
    // Link и Navigate взаимо заменяемые сущности
  };

  return (
    <>
      <h1>userInfo</h1>
      <h2>{userInfo?.name}</h2>
      <h2>{userInfo?.email}</h2>
      <h2>{userInfo?.phone}</h2>
      <Link to="/users" state={{ isOpen: true }}>
        go to USER LIST
      </Link>
      <button type="button" onClick={handler}>
        back
      </button>
    </>
  );
};

export default OneUserPage;
