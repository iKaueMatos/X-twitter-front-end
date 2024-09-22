import { editBanner } from '@/services/profileService/profileService'
import { useMutation, useQueryClient } from 'react-query'

const profileConfig = {
  editBanner: {
    key: 'editBanner',
    request: async (requestData: File) => {
      const formData = await new FormData()
      await formData.append('file', requestData)
      const response = await editBanner(formData)
      return response.data
    },
  },
}

export const useEditBannerMutation = () => {
  const queryClient = useQueryClient()
  const { editBanner: config } = profileConfig
  const state = useMutation(config.request, {
    onSuccess(data) {
      queryClient.invalidateQueries()
      console.log('баннер загружено useEditBannerMutation', data)
    },
    onError(error) {
      console.error('баннер НЕ загружено useEditBannerMutation', error)
    },
  })
  return state
}
