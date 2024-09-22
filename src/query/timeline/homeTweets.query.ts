import { getHomeTweets } from "@/services/timelineService/timelineService";
import { useInfiniteQuery } from "react-query";

import { IDataTweet } from "@/components/tweets/types";

export const useGetTweetHomeQuery = () => {
  return useInfiniteQuery({
    queryKey: 'homeTweets',
    queryFn: ({ pageParam = 0 }) => getHomeTweets(pageParam),
    getNextPageParam: (lastPage, pages: IDataTweet[]) => {
      if (lastPage.length === 5) {
        return pages.length
      } else {
        return false
      }
    },
    onError(error) {
      console.error('useGetTweetHomeQuery error', error)
    },
  })
}