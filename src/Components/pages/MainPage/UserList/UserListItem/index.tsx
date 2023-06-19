import React from 'react';
import { Link } from 'react-router-dom';

type UserListItemType = {
  name: string;
  age?: string;
};

export const UserListItem = ({ name }: UserListItemType) => {
  return (
    <li>
      <Link to={name}>{name}</Link>
    </li>
  );
};
