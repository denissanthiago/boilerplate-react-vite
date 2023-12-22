import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INITIAL_STATE_STORE_AUTH } from 'modules/auth/user/data';
import { IUserAuth } from 'modules/auth/user/entity';
import { RootState } from 'modules/main/store';

export const slice = createSlice({
  name: 'authModuleStore',
  initialState: INITIAL_STATE_STORE_AUTH,
  reducers: {
    setUserAuth: (_state, action: PayloadAction<IUserAuth>) => {
      _state.userAuth = action.payload;
    },
  },
});

const { actions, reducer } = slice;
export const { setUserAuth } = actions;

export const authModuleSelector = (state: RootState) => state.authModuleStore;

export default reducer;
