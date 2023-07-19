import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type IUserDataApiState = {
  data: any[];
};

const initialState: IUserDataApiState = { data: [] };

const slice = createSlice({
  name: 'getUsers',
  initialState,
  reducers: {
    getUserDataApi(state, { payload }: PayloadAction<[]>) {
      console.log(state);
      console.log(payload);

      return { data: [...payload] };
    },
  },
});

export const { reducer: getUserDataReducerApi, name: getUserDataNameReducerApi, actions } = slice;
export const { getUserDataApi } = actions;
