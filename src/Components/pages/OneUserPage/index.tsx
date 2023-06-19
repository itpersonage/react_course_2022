import React from 'react';

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
  return (
    <>
      <h1>userInfo</h1>
      <h2>{userInfo?.name}</h2>
      <h2>{userInfo?.age}</h2>
    </>
  );
};

export default OneUserPage;
