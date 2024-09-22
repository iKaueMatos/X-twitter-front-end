import React from 'react';
import img from '@/assets/images/BlankAvatar.jpg';
import { Box, Container, useTheme } from '@mui/material';
import UnderLine from '@/common/UnderLine';
import Header from '@/components/headers/PageHeader';
import SingleWhoToFollow from './SingleWhoToFollow';

const temp = [
  {
    name: 'Bessie Cooper',
    tag: '@alessandroveronezi',
    avatarUrl: img,
    altImg: 'alt',
    url: '/',
    followURL: '#',
  },
  {
    name: 'Jenny Wilson',
    tag: '@gabrielcantarin',
    avatarUrl: img,
    altImg: 'alt',
    url: '/',
    followURL: '#',
  },
];

export default function WhoToFollow() {
  const theme = useTheme();
  return (
    <Container
      disableGutters
      sx={{
        background: theme.palette.background.default,
        borderRadius: '16px',
      }}
    >
      <Header title="Quem seguir" />
      {temp.map((user, index) => (
        <Box key={user.tag}>
          <SingleWhoToFollow {...user} />
          {temp.length - 1 != index && <UnderLine />}
        </Box>
      ))}
    </Container>
  );
};