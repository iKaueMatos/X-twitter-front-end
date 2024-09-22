import React, { FC, useState } from 'react'
import { Container, Box, Typography, Button } from '@mui/material';
import JoinedDate from '@/common/JoinedDate';
import TaggedText from '@/common/TaggedText';
import UserLocation from '@/common/UserLocation';
import CustomBanner from '@/components/banner/CustomBanner';
import EditUserInfoPopup from '@/components/editUserInfo/EditUserInfoPopup';
import CustomAvatar from '@/components/avatar/CustomAvatar';
import { IUserInfoData } from '../tweets/types';


interface IUserInfo {
  userInfoData?: IUserInfoData
  hasEditButton?: boolean
}

export default function UserInfo({ userInfoData, hasEditButton }: IUserInfo) {
  const [openEditUserInfo, setOpenEditUserInfo] = useState(false)

  const editButtonStyles = {
    borderRadius: '100px',
    height: '40px',
    padding: '0 20px',
    fontFamily: 'button.fontFamily',
    fontStyle: 'button.fontStyle',
    fontWeight: 'button.fontWeight',
    fontSize: 'button.fontSize',
    lineHeight: 'button.lineHeight',
    color: 'primary.dark',
    textTransform: 'none',
    border: '1px solid rgb(207, 217, 222)',
    ':hover': {
      border: '1px solid rgb(255, 255, 255)',
      background: 'rgba(15, 20, 25, 0.1)',
    },
  }

  return (
    <Container disableGutters sx={{ position: 'relative', marginBottom: '10px' }}>
      <Box sx={{ width: '100%', height: '200px', position: 'absolute' }}>
        <CustomBanner img={userInfoData && userInfoData.bannerUrl} alt={userInfoData && userInfoData.bannerUrl} />
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="end"
        position="relative"
        gap={1}
        mx={2}
        paddingTop='120px'
      >
        <Box>
          <CustomAvatar width={150} height={150} img={userInfoData && userInfoData.avatarUrl} alt={userInfoData && userInfoData.avatarUrl} />
          {userInfoData && <Typography variant="h2">{userInfoData.username}</Typography>}
          {userInfoData && (<TaggedText color="tag.contrastText" tagSymbol="@" text={userInfoData.username} />)}
          {userInfoData && (<Typography variant="h4" my={1}> {userInfoData.bio} </Typography>)}
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
            {userInfoData && <UserLocation userLocation={userInfoData.location} />}
            {userInfoData && <JoinedDate joinedDate={userInfoData.joinDate} />}
          </Box>
        </Box>
        {hasEditButton && <Button sx={editButtonStyles} onClick={() => { setOpenEditUserInfo(true) }}> Editar Perfil </Button>}
      </Box>
      {userInfoData && openEditUserInfo && (
        <EditUserInfoPopup
          userInfoData={userInfoData}
          openEditUserInfo={openEditUserInfo}
          setOpenEditUserInfo={setOpenEditUserInfo}
        />
      )}
    </Container>
  )
};