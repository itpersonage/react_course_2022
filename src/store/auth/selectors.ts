import { createSelector } from '@reduxjs/toolkit';
import { type RootState } from '../configureStore';

const getUserData = (state: RootState) => state.userData;
// чтобы постоянно не писать стрелочную функцию

// const getUserEmail = createSelector(getUserData, (state) => state.email);
// Разные варианты записи

export const getUserEmail = createSelector(getUserData, ({ email }) => email);
export const getUserPassword = createSelector(getUserData, ({ password }) => password);
export const getUserToken = createSelector(getUserData, ({ token }) => token);
