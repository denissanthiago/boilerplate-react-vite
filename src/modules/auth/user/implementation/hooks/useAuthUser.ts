import { useQuery } from 'react-query';
import getCurrentSessionAuthUseCase from 'modules/auth/user/useCases/getCurrentSessionAuthUseCase';

const useAuthUser = () => {
  const { isLoading: isLoadingCurrentSession } = useQuery(
    ['get-current-session'],
    getCurrentSessionAuthUseCase,
    {
      staleTime: Infinity,
    }
  );

  return {
    isAuth: true,
    isLoadingCurrentSession,
  };
};

export default useAuthUser;
