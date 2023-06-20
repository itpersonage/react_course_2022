import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

type OneUserPropsType = {
  userInfo:
    | {
        id: number;
        name: string;
        age: string;
      }
    | undefined;
};

const OneUserPage = ({ userInfo }: OneUserPropsType) => {
  const navigate = useNavigate();
  const handler = () => {
    navigate(-1);
  };

  return (
    <>
      <h1>userInfo</h1>
      <h2>{userInfo?.name}</h2>
      <h2>{userInfo?.age}</h2>
      <Link to="/users">go to USER LIST</Link>
      <button type="button" onClick={handler}>
        back
      </button>
    </>
  );
};

export default OneUserPage;
