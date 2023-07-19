import { configureStore } from '@reduxjs/toolkit';
import { userDataNameReducer, userDataReducer } from './auth';
import userDataApiSlice from './users';

export const store = configureStore({
  reducer: {
    [userDataNameReducer]: userDataReducer,
    reducer: userDataApiSlice,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
