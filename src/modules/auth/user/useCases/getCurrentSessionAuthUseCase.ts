import { IUserAuth } from 'modules/auth/user/entity';
import AuthUserServices from '../services';

export interface GetCurrentSessionAuthUseCase {
  user: IUserAuth;
}

const getCurrentSessionAuthUseCase =
  async (): Promise<GetCurrentSessionAuthUseCase> => {
    const user = await AuthUserServices.getUserCurrentSession('token');

    return {
      user,
    };
  };

export default getCurrentSessionAuthUseCase;
