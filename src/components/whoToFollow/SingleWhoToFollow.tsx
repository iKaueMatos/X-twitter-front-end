import { Box, Button, Container, Typography, useTheme } from '@mui/material';
import React, { FC } from 'react';
import Image from 'next/image';
import { IWhoToFollow } from './types';

export default function SingleWhoToFollow({
  name,
  tag,
  avatarUrl,
  altImg,
  url,
  followURL,
}: IWhoToFollow) {
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
        ':hover': {
          background: theme.palette.background.paper,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '10px',
          cursor: 'pointer',
        }}
        onClick={() => {
          console.log(url);
        }}
      >
        <Box
          sx={{
            display: 'block',
            position: 'relative',
            borderRadius: '50%',
            overflow: 'hidden',
            width: '48px',
            height: '48px',
            flex: '0 0 auto',
          }}
        >
          <Image
            width={48}
            height={48}
            style={{ objectFit: 'contain' }}
            src={avatarUrl}
            alt={altImg}
          />
        </Box>
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 500,
              color: theme.palette.secondary.main,
              letterSpacing: '-0.02em',
            }}
          >
            {tag}
          </Typography>
        </Box>
      </Box>
      <Button
        variant="outlined"
        href={followURL}
        sx={{
          borderRadius: '100px',
          width: '77px',
          height: '39px',
          fontFamily: theme.typography.button.fontFamily,
          fontStyle: theme.typography.button.fontStyle,
          fontWeight: theme.typography.button.fontWeight,
          fontSize: theme.typography.button.fontSize,
          lineHeight: theme.typography.button.lineHeight,
          color: theme.palette.primary.main,
          ':hover': {
            background: theme.palette.primary.light,
          },
        }}
      >
        Seguir
      </Button>
    </Container>
  );
};