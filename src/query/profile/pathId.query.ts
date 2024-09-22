import { getProfilePathIdByEmail } from '@/services/profileService/profileService'
import { useQuery } from 'react-query'

export const useGetProfilePathIdByEmailQuery = (email?: string) => {
  return useQuery({
    queryKey: ['getProfilePathIdByEmail', email],
    queryFn: async () => {
      if(email){
        const response = await getProfilePathIdByEmail(email)
        return response.data
      }
    },
    keepPreviousData: true,
    enabled: email !== null,
    onError(error) {
      console.error('getProfilePathIdByEmail error', error)
    },
  })
}
