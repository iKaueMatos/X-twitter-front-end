import { getProfileBanner } from "@/services/profileService/profileService"
import { useQuery } from "react-query"

const profileConfig = {
  getProfileBanner: {
    key: 'getProfileBanner',
    request: async () => {
      const response = await getProfileBanner()
      return response.data
    },
  },
}

export const useGetProfileBannerQuery = () => {
  const { getProfileBanner: config } = profileConfig

  const state = useQuery(config.key, config.request, {
    onError() {
      console.error('баннер ERROR')
    },
  })
  return state
}