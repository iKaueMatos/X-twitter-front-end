import {
  deleteRetweet,
  setRetweet,
} from '@/services/tweetService/retweetController';
import { useMutation } from 'react-query';

const retweetConfig = {
  setRetweet: {
    key: 'setRetweet',
    request: async (params: number) => {
      const response = await setRetweet(params);
      return response;
    },
  },
  deleteRetweet: {
    key: 'deleteRetweet',
    request: async (params: number) => {
      const response = await deleteRetweet(params);
      return response;
    },
  },
};

export const useRetweetMutation = () => {
  const { setRetweet: config } = retweetConfig;
  const state = useMutation(config.request, {
    onSuccess(data) {
      console.log('ретвит сделан', data);
    },
  });

  return state;
};
export const useDeleteRetweetMutation = () => {
  const { deleteRetweet: config } = retweetConfig;
  const state = useMutation(config.request, {
    onSuccess(data) {
      console.log('ретвит удален', data);
    },
  });

  return state;
};
