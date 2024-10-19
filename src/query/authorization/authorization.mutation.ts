import { login, register, verifyEmail } from '@/services/authService/authService';
import { IAuthLoginRequest, IAuthSignUpRequest } from '@/services/types';
import { useMutation } from 'react-query';

const authorizationConfig = {
  registerConfig: {
    key: 'register',
    request: async (params: IAuthSignUpRequest) => {
      const res = await register(params);
      return res.data;
    },
  },
  verifyConfig: {
    key: 'verifyEmail',
    request: async (params: { activationCode: string }) => {
      const res = await verifyEmail(params);
      return res.data;
    },
  },
  loginConfig: {
    key: 'login',
    request: async (params: IAuthLoginRequest) => {
      const res = await login(params);
      return res.data;
    },
  },
};

export const useSignUpMutation = () => {
  const { registerConfig: config } = authorizationConfig;
  const state = useMutation(config.request, {
    onSuccess(data) {
      console.log('', data);
    },
  });

  return state;
};

export const useVerificationMutation = () => {
  const { verifyConfig: config } = authorizationConfig;
  const state = useMutation(config.request, {
    onSuccess(data) {
    },
    onError(error) {
    },
  });

  return state;
};

export const useLoginMutation = () => {
  const { loginConfig: config } = authorizationConfig;
  const state = useMutation(config.request, {
    onSuccess(data) {
      localStorage.setItem('auth-token', data.jwt);
    },
  });

  return state;
};
