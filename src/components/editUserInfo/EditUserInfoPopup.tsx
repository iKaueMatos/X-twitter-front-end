import React, { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useEditProfileBioMutation } from '@/query/profile/profile.mutation';
import { useGetProfilePathIdByEmailQuery } from '@/query/profile/pathId.query';
import { Container, Box } from '@mui/material';
import PopupTemplate from '@/components/popups/templates/PopupTemplate';
import EditAvatar from '@/components/userInfo/EditAvatar';
import EditBanner from '@/components/userInfo/EditBanner';
import EditUserInfoForm from './EditUserInfoForm';
import { IChangeInfoRequest } from '@/services/types';
import { IUserInfoData } from '../tweets/types';

interface IEditUserInfoPopup {
  userInfoData: IUserInfoData
  openEditUserInfo: boolean
  setOpenEditUserInfo: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EditUserInfoPopup({ userInfoData, openEditUserInfo, setOpenEditUserInfo }: IEditUserInfoPopup) {
  const { control, register: registerEditForm, handleSubmit: handleSubmitEditForm, reset: resetEditForm } = useForm<IChangeInfoRequest>()
  const { data: pathId } = useGetProfilePathIdByEmailQuery(userInfoData.email)
  const { mutateAsync: mutateEditProfileBio } = useEditProfileBioMutation()

  const requestEditProfile: SubmitHandler<IChangeInfoRequest> = async (value: IChangeInfoRequest) => {
  const transitionalBioData = await birthDateConverter(value)
    mutateEditProfileBio({ bioData: transitionalBioData, pathId: pathId })
  }

  const birthDateConverter = (obj: IChangeInfoRequest) => {
    if (obj.birthDate !== undefined) {
      obj.birthDate = obj.birthDate.toString().split('T')[0];
    }
    return obj

  }

  const onSubmit = () => {
    handleSubmitEditForm(requestEditProfile)()
    resetEditForm()
  }

  return (
    <PopupTemplate
      title="Editar perfil"
      openPopup={openEditUserInfo}
      setOpenPopup={setOpenEditUserInfo}
      onSubmit={onSubmit}
    >
      <Container disableGutters sx={{ width: { xs: '300px', sm: '600px' }, height: '100%' }}>
        <EditBanner />
        <Box p={2}>
          <EditAvatar />
        </Box>
        <Box p={2}>
          <EditUserInfoForm control={control} userInfoData={userInfoData} registerEditForm={registerEditForm} />
        </Box>
      </Container>
    </PopupTemplate>
  )
}