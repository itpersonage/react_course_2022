import React from 'react';
import { UserListItem } from './UserListItem';
import { useAppSelector } from '../../../../store/users/selectors';

export const UserList = () => {
  const { data } = useAppSelector((state) => state.reducer);
  console.log(data);

  return (
    <>
      <h1>UserList</h1>
      <ul>
        {data.map((el) => (
          <UserListItem key={el.id} name={el.name} />
        ))}
      </ul>
    </>
  );
};
