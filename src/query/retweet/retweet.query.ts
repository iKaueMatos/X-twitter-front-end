import {
  getRetweet,
  getRetweetList,
} from '@/services/tweetService/retweetController';
import { useQuery } from 'react-query';

const retweetConfig = {
  getRetweet: {
    key: 'getRetweet',
    request: async () => {
      const res = await getRetweet();
      return res.data;
    },
  },
  getRetweetList: {
    key: 'getRetweetList',
    request: async () => {
      const res = await getRetweetList();
      return res.data;
    },
  },
};

export const useRetweetQuery = () => {
  const { getRetweet: config } = retweetConfig;
  const state = useQuery(config.key, config.request, {
    enabled: false,
    onSuccess(data) {
      console.log('ретвит получен', data);
    },
    onError(error) {
      console.log('ретвит не получен', error);
    },
  });

  return state;
};

/* useRetweetListQuery еще не внедрено, TODO изменения от бэкенда */
export const useRetweetListQuery = () => {
  const { getRetweetList: config } = retweetConfig;
  const state = useQuery(config.key, config.request, {
    enabled: false,
    onSuccess(data) {
      console.log('ретвиты получены', data);
    },
    onError(error) {
      console.log('ретвиты не получены', error);
    },
  });

  return state;
};
