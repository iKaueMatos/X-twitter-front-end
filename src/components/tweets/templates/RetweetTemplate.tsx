import React, { FC } from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import Avatar from '@/components/Avatar';
import UserHeader from '@/components/headers/UserHeader';
import PassedTime from '@/common/PassedTime';
import { ITweet } from '@/components/tweets/types';
import RetweetSVG from '@/assets/icons/Retweet.svg';
import TweetContentTemplate from './TweetContentTemplate';
import TweetWidgets from './TweetWidgetsTemplate';

interface IRetweetTemplay extends ITweet {
  currentUsername: string;
}
const RetweetTemplate: FC<IRetweetTemplay> = ({
  id,
  isLiked,
  isRetweeted,
  avatarUrl,
  avatarAlt,
  username,
  currentUsername,
  userTag,
  userPassedTime,
  tweetText,
  tweetImg,
  tweetAlt,
  likes,
  replies,
  replyTo,
  retweets,
  retweetTo,
  views,
}) => {
  const theme = useTheme();
  return (
    <Container
      id={id.toString()}
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '0 13px',
        padding: '10px 15px',
      }}
    >
      <Avatar img={avatarUrl} alt={avatarAlt} />
      <Box sx={{ width: '100%' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 0.5,
            }}
          >
            <RetweetSVG width="15" height="11" />
            <Typography
              variant="h6"
              sx={{ color: theme.palette.secondary.main }}
            >
              {currentUsername} Retweeted
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'start',
              textAlign: 'center',
              flexWrap: { xs: 'wrap', sm: 'nowrap' },
              gap: '8px',
            }}
          >
            <UserHeader name={username} tag={userTag} />
            <PassedTime date={userPassedTime} />
          </Box>
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
          <TweetContentTemplate
            tweetText={tweetText}
            tweetImg={tweetImg}
            tweetAlt={tweetAlt}
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

export default RetweetTemplate;
