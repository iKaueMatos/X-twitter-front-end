import { deleteRetweet } from '@/services/tweetService/retweetController'
import { useMutation } from 'react-query'

const retweetConfig = {
  deleteRetweet: {
    key: 'deleteRetweet',
    request: async (params: number) => {
      const response = await deleteRetweet(params)
      return response
    },
  },
}

export const useDeleteRetweetMutation = () => {
  const { deleteRetweet: config } = retweetConfig
  const state = useMutation(config.request, {
    onSuccess(data) {
      console.log('retweet deleted', data)
    },
  })
  return state
}
