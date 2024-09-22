import React, { FC } from 'react';
import { Box, Container } from '@mui/material';
import CustomAvatar from '@/components/avatar/CustomAvatar';
import UserHeader from '@/components/headers/UserHeader';
import PassedTime from '@/common/PassedTime';
import TweetContent from './TweetContent';
import MoreActionButton from '@/components/tweets/MoreActionButton';
import TweetWidgets from './TweetWidgets';
import { ITweet } from '@/components/tweets/types';

export default function Tweet({
  id,
  isLiked,
  isRetweeted,
  isBelongs,
  profile,
  creationDate,
  text,
  mediaUrls,
  likes,
  replies,
  replyTo,
  retweets,
  retweetTo,
  views,
}: ITweet) {

  return (
    <Container
      className='tweet'
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '0 13px',
        padding: '10px 15px',
      }}
    >
      <CustomAvatar img={profile.avatarUrl} alt={profile.avatarUrl} />
      <Box sx={{ width: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: { xs: 'wrap', sm: 'nowrap' }, gap: '8px' }} >
            <UserHeader name={profile.username} tag={profile.username} />
            <PassedTime date={creationDate} />
          </Box>
          {isBelongs && <MoreActionButton id={id} type={'tweet'} />}
        </Box>
        <Box
          sx={{
            m: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            width: { xs: '100%', md: '100%' },
            maxWidth: { xs: '100%', md: '510px' },
          }}
        >
          <TweetContent
            text={text}
            mediaUrls={mediaUrls}
          />
          <TweetWidgets
            id={id}
            isLiked={isLiked}
            isRetweeted={isRetweeted}
            likes={likes}
            replies={replies}
            replyTo={replyTo}
            retweets={retweets}
            retweetTo={retweetTo}
            views={views}
          />
        </Box>
      </Box>
    </Container>
  );
};