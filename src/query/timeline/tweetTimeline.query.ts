import { getUserTweetsById } from '@/services/timelineService/timelineService'
import { useQuery } from 'react-query'

export const useGetUserTweetsByIdQuery = (profileId?: string) => {
  return useQuery({
    queryKey: ['getUserTweetsById', profileId],
    queryFn: async () => {
      if(profileId){
        const response = await getUserTweetsById(profileId)
        return response.data
      }
    },
    keepPreviousData: true,
    enabled: profileId !== null,
    onError(error) {
      console.error('getUserTweetsById error', error)
    },
  })
}