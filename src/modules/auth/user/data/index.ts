import { IStateStoreAuth } from 'modules/auth/user/types';

export const INITIAL_STATE_STORE_AUTH: IStateStoreAuth = {
  userAuth: {
    id: null,
    name: null,
    email: null,
    token: null,
  },
};
