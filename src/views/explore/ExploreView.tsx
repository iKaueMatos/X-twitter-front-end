import React, { FC } from 'react';
import { Box, Grid, useTheme } from '@mui/material';
import { useGetAuthorizedUserDataQuery } from '@/query/profile/authorizedUserData.query';
import Navigation from '@/components/navigation/Navigation';
import News from '@/components/news/News';
import UnderLine from '@/common/UnderLine';
import WhoToFollow from '@/components/whoToFollow/WhoToFollow';
import AccountBar from '@/components/headers/AccountBar/AccountBar';
import Search from '@/components/search/Search';

export default function ProfileView() {
  const theme = useTheme();

  const { data: profileData, isLoading: profileDataIsLoading } = useGetAuthorizedUserDataQuery();
  return (
    <Grid
      className='view-explore'
      container
      gap={2}
      sx={{ justifyContent: 'center', flexWrap: 'nowrap'}}
    >
      <Grid
        className='view-explore-menu'
        item
        sx={{ width: { xs: '68px', sm: '68px', md: '200px', lg: '200px' }, position: 'relative' }} >
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
          <Navigation plan='authorized' activeItem="Explorar" />
          <AccountBar isLoading={profileDataIsLoading} hasAvatar isVertical name={profileData && profileData.username} tag={profileData && profileData.username} />
        </Box>
      </Grid>

      <Grid item
        className='view-explore-content'
        sx={{
          width: { xs: 'auto', sm: '600px', md: '600px' },
          borderLeft: `1px solid ${theme.palette.border?.main}`,
          borderRight: `1px solid ${theme.palette.border?.main}`,
        }}
      >
        <UnderLine />
        <Search />
      </Grid>

      <Grid
        className='view-explore-additional'
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