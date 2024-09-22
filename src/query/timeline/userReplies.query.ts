import { getUserRepliesTweets } from "@/services/timelineService/timelineService";
import { useInfiniteQuery } from "react-query";

import { IDataTweet } from "@/components/tweets/types";

export const useGetUserRepliesQuery = () => {
  return useInfiniteQuery({
    queryKey: 'userReplies',
    queryFn: ({ pageParam = 0 }) => getUserRepliesTweets(pageParam),
    getNextPageParam: (lastPage, pages: IDataTweet[]) => {
      if (lastPage.length === 5) {
        return pages.length
      } else {
        return false
      }
    },
    onError(error) {
      console.error('useGetUserRepliesQuery error', error)
    },
  })
}