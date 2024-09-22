import React, { FC } from 'react';
import { useGetAuthorizedUserDataQuery } from '@/query/profile/authorizedUserData.query';
import { Box, Grid, useTheme } from '@mui/material';
import PageHeader from '@/components/headers/PageHeader';
import Navigation from '@/components/navigation/Navigation';
import News from '@/components/news/News';
import UnderLine from '@/common/UnderLine';
import WhoToFollow from '@/components/whoToFollow/WhoToFollow';
import TweetTabPanel from './components/TweetTabPanel';
import UserInfo from '../../components/userInfo/UserInfo';
import AccountBar from '@/components/headers/AccountBar/AccountBar';

export default function ProfileView() {
  const theme = useTheme();
  const { data: userInfoData, isLoading: userInfoDataIsLoading } = useGetAuthorizedUserDataQuery();

  return (
    <Grid
      className='view-profile'
      container
      gap={2}
      sx={{ justifyContent: 'center', flexWrap: 'nowrap'}}
    >
      <Grid
        className='view-profile-menu'
        item
        sx={{
          width: { xs: '68px', sm: '68px', md: '200px', lg: '200px' },
          position: 'relative'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'fixed',
            height: '100vh',
            width: 'inherit',
            pb: 2,
          }}>
          <Navigation plan='authorized' activeItem="Profile" />
          <AccountBar
            isLoading={userInfoDataIsLoading}
            hasAvatar
            isVertical
            name={userInfoData && userInfoData.username}
            tag={userInfoData && userInfoData.username}
          />
        </Box>
      </Grid>

      <Grid
        className='view-profile-content'
        item
        sx={{
          width: { xs: 'auto', sm: '600px', md: '600px' },
          borderLeft: `1px solid ${theme.palette.border?.main}`,
          borderRight: `1px solid ${theme.palette.border?.main}`,
        }}
      >
        <PageHeader title="Perfil" />
        <UnderLine />
        <UserInfo hasEditButton userInfoData={userInfoData} />
        <UnderLine />
        <TweetTabPanel index={0} value={0} />
      </Grid>

      <Grid
        className='view-profile-additional'
        item
        sx={{
          display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
          flexDirection: 'column',
          gap: '30px',
          width: '350px',
        }}
      >
        <News />
        <WhoToFollow />
      </Grid>
    </Grid>
  );
};