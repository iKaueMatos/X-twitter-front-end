import {
  getUsersList,
} from '@/services/profileService/profileService'
import { ISearchQueryData } from '@/services/types'
import { useQuery } from 'react-query'

export const useGetSearchUsersListQuery = (
  searchQueryData: ISearchQueryData
) => {
  return useQuery({
    queryKey: ['getSearchUsersList', searchQueryData],
    queryFn: async () => {
      const response = await getUsersList(searchQueryData)
      return response.data
    },
    keepPreviousData: true,
    enabled: searchQueryData !== null,
    onError(error) {
      console.error('searchQueryData error', error)
    },
  })
}

