import { IUserAuth } from 'modules/auth/user/entity';
import { IUserLogin } from 'modules/auth/user/types';

const AuthUserServices = {
  async getUserCurrentSession(payload: IUserAuth['token']) {
    const response = await fetch('https://dummyjson.com/auth/current-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    return response.json();
  },
  async loginUserSession(payload: IUserLogin) {
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    return response.json();
  },
};

export default AuthUserServices;
