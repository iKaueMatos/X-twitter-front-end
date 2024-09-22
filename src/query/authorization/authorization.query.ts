import { logout } from '@/services/authService/authService';
import { useQuery } from 'react-query';

const authorizationConfig = {
  logoutConfig: {
    key: 'logout',
    request: async () => {
      const res = await logout();
      return res.data;
    },
  },
};

export const useLogoutQuery = () => {
  const { logoutConfig: config } = authorizationConfig;
  const state = useQuery(config.key, config.request, {
    enabled: false,
    onSuccess(data) {
      console.log('выход успешен', data);
      localStorage.removeItem('auth-token');
    },
    onError(error) {
      console.log('выход ошибка', error);
    },
  });

  return state;
};
