import { addTweet } from '@/services/tweetService/tweetController'
import { IAddTweetRequest } from '@/services/types'
import { useMutation, useQueryClient } from 'react-query'

const tweetConfig = {
  addTweet: {
    key: 'addTweet',
    request: async (requestData: IAddTweetRequest) => {
      const mydata = await new FormData()
      const blob = new Blob([JSON.stringify({ text: requestData.text })], {
        type: 'application/json',
      })

      await mydata.append('request', blob)
      await mydata.append('files', requestData.file)

      const response = await addTweet(mydata)
      return response.data
    },
  },
}

export const useAddTweetMutation = () => {
  const queryClient = useQueryClient()
  const { addTweet: config } = tweetConfig
  const state = useMutation(config.request, {
    onSuccess(data) {
      queryClient.invalidateQueries()
      console.log('Пост создан', data)
    },
    onError(error) {
      console.log('ошибка создания поста', error)
    },
  })

  return state
}
