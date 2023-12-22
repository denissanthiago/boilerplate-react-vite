import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from '@reduxjs/toolkit';

import authModuleStore from 'modules/auth/common/store';
import patientsModuleStore from 'modules/patients/common/store';

const reducer = combineReducers({
  authModuleStore,
  patientsModuleStore,
});

export const store = configureStore({
  devTools: import.meta.env.VITE_NODE_ENV === 'development',
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
