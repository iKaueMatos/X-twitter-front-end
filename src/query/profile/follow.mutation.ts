import { toFollow } from "@/services/profileService/followService"
import { useMutation } from "react-query"

const profileConfig = {
  toFollow: {
    key: 'toFollow',
    request: async (followeeId: string) => {
      const response = await toFollow(followeeId)
      return response
    },
  },
}

export const useToFollowMutation = () => {
  const { toFollow: config } = profileConfig
  const state = useMutation(config.request, {
    onSuccess(data) {
      console.log('подписался на user', data)
    },
    onError(error) {
      console.log('подписка на user ERROR', error)
    },
  })
  return state
}
