import { createSelector } from '@reduxjs/toolkit';
import { type TState } from '../configureStore';

const getUserData = (state: TState) => state.getUsers;
console.log(getUserData);

// чтобы постоянно не писать стрелочную функцию

// const getUserEmail = createSelector(getUserData, (state) => state.email);
// Разные варианты записи

export const getUserDataApi = createSelector(getUserData, ({ data }) => data);
