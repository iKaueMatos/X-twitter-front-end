import { makeLike, deleteLike } from '@/services/tweetService/likeController';
import { useMutation } from 'react-query';

const likeConfig = {
  makeLike: {
    key: 'makeLike',
    request: async (tweetId: number) => {
      const response = await makeLike(tweetId);
      return response;
    },
  },
  deleteLike: {
    key: 'deleteLike',
    request: async (tweetId: number) => {
      const response = await deleteLike(tweetId);
      return response;
    },
  },
};

export const useLikeMutation = () => {
  const { makeLike: config } = likeConfig;
  const state = useMutation(config.request, {
    onSuccess(data) {
      console.log('лайк сделан', data);
    },
  });

  return state;
};
export const useDeleteLikeMutation = () => {
  const { deleteLike: config } = likeConfig;
  const state = useMutation(config.request, {
    onSuccess(data) {
      console.log('лайк удален', data);
    },
  });

  return state;
};
