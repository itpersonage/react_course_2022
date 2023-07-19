import React from 'react';
import { useSelector } from 'react-redux';
import { UserListItem } from './UserListItem';
import { TState } from '../../../../store/configureStore';

export const UserList = () => {
  const data = useSelector((state: TState) => state.getUsers);
  console.log(data.data);

  return (
    <>
      <h1>UserList</h1>
      <ul>
        {data.data.map((el) => (
          <UserListItem key={el.id} name={el.name} />
        ))}
      </ul>
    </>
  );
};
