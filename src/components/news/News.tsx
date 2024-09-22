import React, { FC } from 'react';
import SingleNews from './SingleNews';
import img from '../../temp/testPost.jpg';
import { Box, Container, useTheme } from '@mui/material';
import UnderLine from '@/common/UnderLine';
import Header from '../headers/PageHeader';

const temp = [
  {
    title: 'COVID19',
    date: 1686768612913,
    text: 'England’s Chief Medical Officer says the UK is at the most dangerous time of the pandemic',
    mainTag: 'covid19',
    newsImg: img,
    newsAlt: 'alt',
  },
  {
    title: 'US news',
    date: 1686823262414,
    text: 'Parler may go offline following suspensions by Amazon, Apple and Google',
    mainTag: 'trump',
    newsImg: img,
    newsAlt: 'alt',
  },
];

export default function News() {
  const theme = useTheme();

  return (
    <Container
      disableGutters
      sx={{
        background: theme.palette.background.default,
        borderRadius: '16px',
      }}
    >
      <Header title="O que está acontecendo?" />
      {temp.map((singleNews, index) => (
        <Box key={singleNews.date}>
          <SingleNews {...singleNews} />
          {temp.length - 1 != index && <UnderLine />}
        </Box>
      ))}
    </Container>
  );
};