import { Box, Container, Typography, useTheme } from '@mui/material';
import React, { FC } from 'react';
import Image from 'next/image';
import PassedTime from '@/common/PassedTime';
import { ISingleNews } from './types';
import TaggedText from '@/common/TaggedText';

export default function SingleNews({
  title,
  date,
  text,
  mainTag,
  newsImg,
  newsAlt,
} : ISingleNews) {
  const theme = useTheme();
  
  return (
    <Container
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'start',
        justifyContent: 'space-between',
        minWidth: { xs: 'auto', sm: '350px' },
        p: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          gap: '6px 0',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 500,
              color: theme.palette.secondary.main,
              letterSpacing: '-0.02em',
            }}
          >
            {title}&nbsp;
          </Typography>
          <PassedTime date={date.toString()} />
        </Box>
        <Box sx={{ textAlign: 'start' }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
            }}
          >
            {text}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '0 4px',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 500,
              color: theme.palette.secondary.main,
              letterSpacing: '-0.02em',
            }}
          >
            Trending with
          </Typography>
          <TaggedText color="tag.main" tagSymbol="#" text={mainTag} />
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
          position: 'relative',
          borderRadius: '10px',
          width: '70px',
          height: '70px',
        }}
      >
        {' '}
        <Image
          width={70}
          height={70}
          style={{ objectFit: 'contain' }}
          src={newsImg}
          alt={newsAlt}
        />
      </Box>
    </Container>
  );
};
