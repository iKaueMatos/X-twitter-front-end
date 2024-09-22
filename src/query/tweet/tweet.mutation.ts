import {
  deleteTweet,
  makeTweet,
} from '@/services/tweetService/tweetController';
import { IMakeTweetRequest } from '@/services/types';
import { useMutation, useQueryClient } from 'react-query';

const tweetConfig = {
  makeTweet: {
    key: 'makeTweet',
    request: async (requestData: IMakeTweetRequest) => {
      const mydata = await new FormData();
      const blob = new Blob([JSON.stringify({ text: requestData.text })], {
        type: 'application/json',
      });

      await mydata.append('request', blob);
      await mydata.append('files', requestData.file[0]);

      const response = await makeTweet(mydata);
      return response.data;
    },
  },

  deleteTweet: {
    key: 'deleteTweet',
    request: async (requestData: number) => {
      const response = await deleteTweet(requestData);
      return response;
    },
  },
};

export const useMakeTweetMutation = () => {
  const queryClient = useQueryClient();

  const { makeTweet: config } = tweetConfig;
  const state = useMutation(config.request, {
    onSuccess(data) {
      queryClient.invalidateQueries();
      console.log('Пост создан', data);
    },
    onError(error) {
      console.log('ошибка создания поста', error);
    },
  });

  return state;
};

export const useDeleteTweetMutation = () => {
  const queryClient = useQueryClient();

  const { deleteTweet: config } = tweetConfig;
  const state = useMutation(config.request, {
    onSuccess(data) {
      queryClient.invalidateQueries();
      console.log('Пост удален', data);
    },
    onError(error) {
      console.log('ошибка удаления поста', error);
    },
  });

  return state;
};
