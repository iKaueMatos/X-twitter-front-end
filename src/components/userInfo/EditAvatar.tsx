import { Box, IconButton, useTheme } from '@mui/material'
import React, { ChangeEventHandler, MutableRefObject, useRef } from 'react'
import AddPhotoSVG from '@/assets/icons/AddPhoto.svg';
import CustomAvatar from '../avatar/CustomAvatar';
import { useEditAvatarMutation } from '@/query/profile/avatar.mutation';
import { useGetProfileAvatarQuery } from '@/query/profile/avatar.query';

export default function EditAvatar() {
  const theme = useTheme()
  const { data: avatarUrl } = useGetProfileAvatarQuery()
  const { mutateAsync: mutateEditAvatar } = useEditAvatarMutation()
  const inputRef = useRef<HTMLInputElement | null>(null) as MutableRefObject<HTMLInputElement>
  const handleClick = () => {
    inputRef.current.click()
  };

  const avatarRequest = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) { return }
    if (files && files.length > 0) {
      const requestFile = await files[0];
      await mutateEditAvatar(requestFile)
    }
  }

  return (
    <Box marginTop='-75px' position='relative' width='fit-content'>
      <IconButton
        onClick={() => {
          handleClick()
        }}
        sx={{
          position: 'absolute',
          zIndex: 1,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          background: 'rgba(0, 0, 0, 0.4)',
          borderRadius: '50%',
          ':hover': {
            background: 'rgba(0, 0, 0, 0.2)',
          },
        }}>
        <AddPhotoSVG width='25px' height='25px' fill={theme.palette.primary.light} />
        <input
          type='file'
          id='fileAvatar'
          ref={inputRef}
          style={{ display: 'none' }}
          onChange={avatarRequest as unknown as ChangeEventHandler<HTMLInputElement>} />
      </IconButton>
      <CustomAvatar width={120} height={120} img={avatarUrl} alt={avatarUrl} />
    </Box>
  )
}
