import React, { FC, useEffect } from 'react';
import InnerTweet from '@/components/inner/InnerTweet';
import { Alert, Box, Button, CircularProgress, Grid, useTheme } from '@mui/material';
import { useGetAuthorizedUserDataQuery } from '@/query/profile/authorizedUserData.query';
import { useGetProfileAvatarQuery } from '@/query/profile/avatar.query';
import { useGetTweetHomeQuery } from '@/query/timeline/homeTweets.query';
import PageHeader from '@/components/headers/PageHeader';
import Navigation from '@/components/navigation/Navigation';
import News from '@/components/news/News';
import UnderLine from '@/common/UnderLine';
import WhoToFollow from '@/components/whoToFollow/WhoToFollow';
import AccountBar from '@/components/headers/AccountBar/AccountBar';
import TweetAndRetweetList from '@/components/tweets/TweetAndRetweetList';
import { useInView } from 'react-intersection-observer';

export default function HomePage() {
  const theme = useTheme();
  const { ref, inView } = useInView();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError } = useGetTweetHomeQuery();
  const { data: avatarUrl } = useGetProfileAvatarQuery();
  const { data: profileData, isLoading: profileDataIsLoading } = useGetAuthorizedUserDataQuery();

  useEffect(() => {
    if (!isLoading && inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView, isLoading]);

  return (
    <Grid
      className='view-home'
      container
      gap={2}
      sx={{ justifyContent: 'center', flexWrap: 'nowrap'}}
    >
      <Grid
        className='view-home-menu'
        item
        sx={{
          width: { xs: '68px', sm: '68px', md: '200px', lg: '200px' },
          position: 'relative'
        }}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'fixed',
          height: '100vh',
          width: 'inherit',
          pb: 2,
        }}>
          <Navigation plan='authorized' activeItem="Início" />
          <AccountBar
            isLoading={profileDataIsLoading}
            hasAvatar
            isVertical
            name={profileData && profileData.username}
            tag={profileData && profileData.username} />
        </Box>
      </Grid>
      <Grid
        className='view-home-content'
        item
        sx={{
          width: { xs: 'auto', sm: '600px', md: '600px' },
          borderLeft: `1px solid ${theme.palette.border?.main}`,
          borderRight: `1px solid ${theme.palette.border?.main}`,
        }}
      >
        <PageHeader title="Início" hasIcon />
        <UnderLine />

        <InnerTweet avatarUrl={avatarUrl} avatarAlt="avatarAlt" />
        <UnderLine />

        <Box width='100%' textAlign='center'> {isLoading && <CircularProgress sx={{ m: 1 }} />} </Box>
        {isError && (<Alert severity="error">Erro ao carregar os posts do usuário</Alert>)}
        {data && data.pages.map((page, index: number) => (
          <React.Fragment key={index}>
            <TweetAndRetweetList tweets={page || []} />
          </React.Fragment>
        ))}
        {hasNextPage && (
          <Button sx={{ width: '100%' }} ref={ref} onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            {isFetchingNextPage ? 'Carregando mais...' : 'Carregar Mais'}
          </Button>
        )}
      </Grid>
      <Grid
        className='view-home-additional'
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
