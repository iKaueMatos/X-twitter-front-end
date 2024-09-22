import {
  getProfileAvatar,
  getProfileData,
} from '@/services/profileService/profileService';

import { useQuery } from 'react-query';

const profileConfig = {
  getProfileAvatar: {
    key: 'geProfileAvatar',
    request: async () => {
      const response = await getProfileAvatar();
      return response.data;
    },
  },
  getProfileData: {
    key: 'getProfileData',
    request: async () => {
      const response = await getProfileData();
      return response.data;
    },
  },
};

export const useGetProfileAvatarQuery = () => {
  const { getProfileAvatar: config } = profileConfig;

  const state = useQuery(config.key, config.request, {
    onSuccess() {
      console.log('data пользователя получена');
    },
    onError(error) {
      console.log('data пользователя ошибка', error);
    },
  });
  return state;
};

export const useGetProfileDataQuery = () => {
  const { getProfileData: config } = profileConfig;

  const state = useQuery(config.key, config.request, {
    onSuccess() {
      console.log('data профиля получена');
    },
    onError(error) {
      console.log('data профиля ошибка', error);
    },
  });
  return state;
};
