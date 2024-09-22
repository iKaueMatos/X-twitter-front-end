import React, { FC } from 'react';
import { Box, Container, Paper, Typography, useTheme } from '@mui/material';
import CustomAvatar from '@/components/avatar/CustomAvatar';
import UserHeader from '@/components/headers/UserHeader';
import PassedTime from '@/common/PassedTime';
import TweetContent from './TweetContent';
import { IDataReply } from './types';
import TweetWidgets from './TweetWidgets';
import TaggedText from '@/common/TaggedText';
import MoreActionButton from './MoreActionButton';

export default function Reply({
  id,
  isLiked,
  isRetweeted,
  isBelongs,
  mediaUrls,
  likes,
  replies,
  replyTo,
  retweets,
  retweetTo,
  views,
  profile,
  creationDate,
  text,
  replyId,
  replyIsLiked,
  replyIsRetweeted,
  replyIsBelongs,
  replyProfile,
  replycreationDate,
  replyTweetText,
  replyMediaUrls,
  replyLikes,
  replyReplies,
  replyReplyTo,
  replyRetweets,
  replyRetweetTo,
  replyViews,
}: IDataReply) {
  const theme = useTheme();

  return (
    <Container
      className='reply'
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        padding: '10px 15px',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
        <Box position="relative">
          <CustomAvatar img={replyProfile.avatarUrl} alt={replyProfile.avatarUrl} />
          <Paper
            sx={{
              background: theme.palette.secondary.main,
              position: 'absolute',
              left: '50%',
              width: '1px',
              filter: 'blur(1px)',
              height: '40px',
              marginTop: '5px',
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            width: '100%',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'start',
                textAlign: 'center',
                gap: 1,
                flexWrap: { xs: 'wrap', sm: 'nowrap' },
              }}
            >
              <UserHeader name={replyProfile.username} tag={replyProfile.username} />
              <PassedTime date={replycreationDate} />
            </Box>
            {isBelongs && <MoreActionButton id={id} type={'reply'} />}
          </Box>

          <TweetContent
            text={replyTweetText}
            mediaUrls={replyMediaUrls}
          />
          <TweetWidgets
            id={replyId}
            isLiked={replyIsLiked}
            isRetweeted={replyIsRetweeted}
            likes={replyLikes}
            replies={replyReplies}
            replyTo={replyReplyTo}
            retweets={replyRetweets}
            retweetTo={replyRetweetTo}
            views={replyViews}
          />
        </Box>
      </Box>
      <Box>
        <Box display="flex" flexDirection="row" gap={2}>
          <CustomAvatar img={profile.avatarUrl} alt={profile.avatarUrl} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              width: '100%',
            }}
          >
            <Box display="flex" flexDirection="row">
              <UserHeader name={profile.username} tag={profile.username} />
              <PassedTime date={creationDate} />
            </Box>
            <Box display="flex" flexDirection="column" gap={1}>
              <Box display="flex" flexDirection="row" gap={0.5}>
                <Typography
                  variant="h6"
                  color="secondary.main"
                  display="flex"
                  flexDirection="row"
                  gap={0.5}
                >
                  Replying to
                </Typography>
                <TaggedText color="tag.main" tagSymbol="@" text={replyProfile.username} />
              </Box>

              <TweetContent
                text={text}
                mediaUrls={mediaUrls}
              />
            </Box>
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
      </Box>
    </Container>
  );
};