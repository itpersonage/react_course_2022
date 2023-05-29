import React from 'react';
import { UserListItem } from './UserListItem';

type UserListType = {
  data: {
    id: number;
    name: string;
    age: string;
  }[];
};

export const UserList = ({ data }: UserListType) => {
  return (
    <>
      <h1>UserList</h1>
      <ul>
        {data.map((el) => (
          <UserListItem key={el.id} name={el.name} age={el.age} />
        ))}
      </ul>
    </>
  );
};
