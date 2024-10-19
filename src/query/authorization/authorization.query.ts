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
      localStorage.removeItem('auth-token');
    },
    onError(error) {
    },
  });

  return state;
};
