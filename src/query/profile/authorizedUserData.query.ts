import { getAuthorizedUserData } from '@/services/profileService/profileService'
import { useQuery } from 'react-query'
import { IUserInfoData } from '@/components/tweets/types'


const profileConfig = {
  getAuthorizedUserData: {
    key: 'getAuthorizedUserData',
    request: async (): Promise<IUserInfoData> => {
      const response = await getAuthorizedUserData()
      return response.data
    },
  },
}

export const useGetAuthorizedUserDataQuery = () => {
  const { getAuthorizedUserData: config } = profileConfig
  const state = useQuery(config.key, config.request, {
    onError(error) {
    },
  })
  return state
}
