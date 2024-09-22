import React, { FC } from 'react';
import { Container, ImageListItem, Typography } from '@mui/material';
import Image from 'next/image';
import { ITweetContent } from '@/components/tweets/types';

export default function TweetContent({ text, mediaUrls }: ITweetContent) {
  const isShowImage = mediaUrls?.length !== 0 && mediaUrls !== undefined;

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
      <Typography sx={{ wordWrap: 'break-word' }}>{text}</Typography>
      {isShowImage && mediaUrls.map((item) => (
          <ImageListItem key={item} sx={{
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            width: '100%',
            height: '100%',
          }}>
            <Image
              width={100}
              height={100}
              style={{ width: 'inherit', height: 'inherit' }}
              unoptimized
              src={item}
              alt={item}
            />
          </ImageListItem>
        ))

      }
    </Container>
  );
};