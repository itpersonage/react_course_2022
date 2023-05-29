import React from 'react';

type UserListItemType = {
  name: string;
  age?: string;
};

export const UserListItem = ({ name, age }: UserListItemType) => <li>{`${name}  -  ${age}`}</li>;
