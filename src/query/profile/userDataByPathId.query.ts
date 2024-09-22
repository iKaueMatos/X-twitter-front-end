import { getUserDataByPathId } from "@/services/profileService/profileService";
import { useQuery } from "react-query";

export const useUserDataByPathIdQuery = (pathId?: string) => {
  return useQuery({
    queryKey: ['userDataByPathId', pathId],
    queryFn: async () => {
      if(pathId){
        const response = await getUserDataByPathId(pathId)
        return response.data
      }
    },
    keepPreviousData: true,
    enabled: pathId !== null,
    onError(error) {
      console.error('getUserDataByPathId error', error)
    },
  })
}