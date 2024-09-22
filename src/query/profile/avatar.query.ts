import { getProfileAvatar } from "@/services/profileService/profileService"
import { useQuery } from "react-query"

const profileConfig = {
  getProfileAvatar: {
    key: 'getProfileAvatar',
    request: async () => {
      const response = await getProfileAvatar()
      return response.data
    },
  },
}

export const useGetProfileAvatarQuery = () => {
  const { getProfileAvatar: config } = profileConfig

  const state = useQuery(config.key, config.request, {
    onSuccess() {
      console.log('/api/v1/profiles/images/avatar received successfully')
    },
    onError() {
      console.error('/api/v1/profiles/images/avatar ERROR')
    },
  })
  return state
}