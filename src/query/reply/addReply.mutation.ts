import { addReply } from '@/services/tweetService/replyController'
import { IAddTweetRequest } from '@/services/types'
import { useMutation, useQueryClient } from 'react-query'

type IMakeRequest = {
  requestData: IAddTweetRequest
  replyToId: number
}

const replyConfig = {
  addReply: {
    key: 'addReply',
    request: async (params: IMakeRequest) => {
      const requestData = params.requestData
      const replyToId = params.replyToId

      const formData = await new FormData()
      const blob = new Blob([JSON.stringify({ text: requestData.text })], {
        type: 'application/json',
      })

      await formData.append('request', blob)
      await formData.append('files', requestData.file[0])

      const response = await addReply(formData, replyToId)
      return response.data
    },
  },
}

export const useAddReplyMutation = () => {
  const queryClient = useQueryClient()

  const { addReply: config } = replyConfig
  const state = useMutation(config.request, {
    onSuccess(data) {
      queryClient.invalidateQueries()
      console.log('реплай сделан', data)
    },
  })

  return state
}
