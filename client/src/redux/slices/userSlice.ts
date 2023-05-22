import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import type { LoginUserType, SignUpUserType, UserType } from '../../types/UserTypes';
import type { AppThunk } from '../hooks';

type UserState = UserType & { loading: boolean };
const initialState: UserState = { loading: true };

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => action.payload,
  },
});

export const { setUser } = userSlice.actions;

export const checkAuth = (): AppThunk => (dispatch) => {
  axios<UserType>('/api/user/check')
    .then(({ data }) => dispatch(setUser({ ...data, loading: false })))
    .catch(() => dispatch(setUser({ loading: false })));
};

export const logoutThunk = (): AppThunk => (dispatch) => {
  axios('/api/user/logout')
    .then(() => dispatch(setUser({ loading: false })))
    .catch(console.log);
};

export const signUpThunk =
  (form: SignUpUserType): AppThunk =>
  (dispatch) =>
    axios
      .post<UserType>('/api/user/signup', form)
      .then(({ data }) => dispatch(setUser({ ...data, loading: false })))
      .catch(() => dispatch(setUser({ loading: false })));

export const loginThunk =
  (form: LoginUserType): AppThunk =>
  (dispatch) => {
    axios
      .post<UserType>('/api/user/login', form)
      .then(({ data }) => dispatch(setUser({ ...data, loading: false })))
      .catch(() => dispatch(setUser({ loading: false })));
  };

export default userSlice.reducer;
