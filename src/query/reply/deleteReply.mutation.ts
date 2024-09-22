import { deleteRetweet } from '@/services/tweetService/retweetController'
import { useMutation } from 'react-query'

const replyConfig = {
  deleteReply: {
    key: 'deleteRetweet',
    request: async (params: number) => {
      const response = await deleteRetweet(params)
      return response
    },
  },
}

export const useDeleteReplyMutation = () => {
  const { deleteReply: config } = replyConfig
  const state = useMutation(config.request, {
    onSuccess(data) {
      console.log('reply deleted', data)
    },
    onError(error) {
      console.error('reply NOT deleted', error)
    },
  })
  return state
}
