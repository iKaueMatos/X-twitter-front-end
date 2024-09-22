import React, { FC } from 'react';
import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import { ITweetContentTemplate } from '@/components/tweets/types';

const TweetContentTemplate: FC<ITweetContentTemplate> = ({ tweetText, tweetImg, tweetAlt }) => {
  const isShowImage = tweetImg && tweetAlt;
  return (
    <Container
      disableGutters
      sx={{
        m: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: { xs: '100%', md: '100%' },
        maxWidth: { xs: '100%', md: '510px' },
      }}
    >
      <Typography sx={{ wordWrap: 'break-word' }}>{tweetText}</Typography>
      {isShowImage && (
        <Box
          sx={{
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            width: '100%',
            height: '100%',
          }}
        >
          <Image
            width={100}
            height={100}
            style={{ width: 'inherit', height: 'inherit' }}
            unoptimized
            src={tweetImg}
            alt={tweetAlt}
          />
        </Box>
      )}
    </Container>
  );
};

export default TweetContentTemplate;
