import { makeReply } from '@/services/tweetService/replyController'
import { IMakeTweetRequest } from '@/services/types'
import { useMutation } from 'react-query'

type IMakeRequest = {
  requestData: IMakeTweetRequest
  replyToId: number
}

const replyConfig = {
  makeReply: {
    key: 'makeReply',
    request: async (params: IMakeRequest) => {
      const requestData = params.requestData
      const replyToId = params.replyToId

      const formData = await new FormData()
      const blob = new Blob([JSON.stringify({ text: requestData.text })], {
        type: 'application/json',
      })

      await formData.append('request', blob)
      await formData.append('files', requestData.file[0])

      const response = await makeReply(formData, replyToId)
      return response.data
    },
  },
}

export const useMakeReplyMutation = () => {
  const { makeReply: config } = replyConfig
  const state = useMutation(config.request, {
    onSuccess(data) {
      console.log('реплай сделан', data)
    },
  })

  return state
}
