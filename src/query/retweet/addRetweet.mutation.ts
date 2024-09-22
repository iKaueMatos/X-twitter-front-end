import { addRetweet } from '@/services/tweetService/retweetController'
import { useMutation, useQueryClient } from 'react-query'

const retweetConfig = {
  addRetweet: {
    key: 'addRetweet',
    request: async (params: number) => {
      const response = await addRetweet(params)
      return response
    },
  },
}

export const useMakeRetweetMutation = () => {
  const queryClient = useQueryClient()
  const { addRetweet: config } = retweetConfig
  const state = useMutation(config.request, {
    onSuccess(data) {
      queryClient.invalidateQueries()
      console.log('ретвит сделан', data)
    },
  })

  return state
}
