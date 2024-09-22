import { deleteTweet } from '@/services/tweetService/tweetController'
import { useMutation, useQueryClient } from 'react-query'

const tweetConfig = {
  deleteTweet: {
    key: 'deleteTweet',
    request: async (requestData: number) => {
      const response = await deleteTweet(requestData)
      return response
    },
  },
}

export const useDeleteTweetMutation = () => {
  const queryClient = useQueryClient()

  const { deleteTweet: config } = tweetConfig
  const state = useMutation(config.request, {
    onSuccess(data) {
      queryClient.invalidateQueries()
      console.log('Пост удален', data)
    },
    onError(error) {
      console.log('ошибка удаления поста', error)
    },
  })

  return state
}
