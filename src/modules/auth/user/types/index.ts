import { IUserAuth } from 'modules/auth/user/entity';

export type IUserLogin = {
  email: string;
  password: string;
};

export type IStateStoreAuth = {
  userAuth: IUserAuth;
};
