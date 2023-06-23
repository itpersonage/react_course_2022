import { createSelector } from '@reduxjs/toolkit';
import { type TState } from '../configureStore';

const getUserData = (state: TState) => state.userData;
// чтобы постоянно не писать стрелочную функцию

// const getUserEmail = createSelector(getUserData, (state) => state.email);
// Разные варианты записи

export const getUserEmail = createSelector(getUserData, ({ email }) => email);
export const getUserToken = createSelector(getUserData, ({ token }) => token);
