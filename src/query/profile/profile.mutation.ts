import { editProfileBio } from '@/services/profileService/profileService'
import { IChangeInfoRequest } from '@/services/types'
import { useMutation, useQueryClient } from 'react-query'

type IEditProfileBio = {
  pathId: string
  bioData: IChangeInfoRequest
}

const profileConfig = {
  editProfileBio: {
    key: 'editProfileBio',
    request: async (params: IEditProfileBio) => {
      const pathId = params.pathId
      const bioData = params.bioData
      const response = await editProfileBio(pathId, bioData)
      return response
    },
  },
}

export const useEditProfileBioMutation = () => {
  const queryClient = useQueryClient()

  const { editProfileBio: config } = profileConfig
  const state = useMutation(config.request, {
    onSuccess(data) {
      queryClient.invalidateQueries()
      console.log('био-данные обновлены', data)
    },
    onError(error) {
      console.log('био-данные НЕ обновлены, ошибка', error)
    },
  })
  return state
}
