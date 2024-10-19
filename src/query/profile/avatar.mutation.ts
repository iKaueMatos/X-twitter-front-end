import { editAvatar } from '@/services/profileService/profileService'
import { useMutation, useQueryClient } from 'react-query'

const profileConfig = {
  editAvatar: {
    key: 'editAvatar',
    request: async (requestData: File) => {
      const formData = await new FormData()
      await formData.append('file', requestData)
      const response = await editAvatar(formData)
      return response.data
    },
  },
}

export const useEditAvatarMutation = () => {
  const queryClient = useQueryClient()
  const { editAvatar: config } = profileConfig
  const state = useMutation(config.request, {
    onSuccess(data) {
      queryClient.invalidateQueries()
    },
    onError(error) {
    },
  })
  return state
}
