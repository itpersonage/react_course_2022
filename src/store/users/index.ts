/* eslint-disable no-param-reassign */
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

type TUser = {
  id: number;
  name: string;
};

export const getUser = createAsyncThunk('posts/getPosts', async (data, thunkApi) => {
  try {
    const response = await axios.get<TUser[]>(
      'https://jsonplaceholder.typicode.com/users?_limit=10'
    );
    return response.data;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

interface IUserState {
  loading: boolean;
  error: null | string;
  data: TUser[];
}

const initialState: IUserState = {
  loading: false,
  error: null,
  data: [],
};

const userDataApiSlice = createSlice({
  name: 'getUsersAPI',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action: PayloadAction<TUser[]>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userDataApiSlice.reducer;
