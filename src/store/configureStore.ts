import { configureStore } from '@reduxjs/toolkit';
import { userDataNameReducer, userDataReducer } from './auth';
import { getUserDataNameReducerApi, getUserDataReducerApi } from './users';

export const store = configureStore({
  reducer: {
    [userDataNameReducer]: userDataReducer,
    [getUserDataNameReducerApi]: getUserDataReducerApi,
  },
  devTools: true,
});

export type TState = ReturnType<typeof store.getState>;
