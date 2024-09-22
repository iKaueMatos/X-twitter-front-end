import React, { FC } from 'react';
import { Container, IconButton, Typography, useTheme } from '@mui/material';
import TopTweet from '@/assets/icons/TopTweet.svg';

const onClick = () => {
  console.log('PageHeader click');
};

interface IPageHeader {
  title: string;
  hasIcon?: boolean;
}

export default function PageHeader({ title, hasIcon }: IPageHeader) {
  const theme = useTheme();

  return (
    <Container
      disableGutters
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '0 13px',
        padding: '10px 15px',
      }}
    >
      <Typography variant="h3" fontWeight={700}>
        {title}
      </Typography>
      {hasIcon && (
        <IconButton sx={{ m: 0, p: 0 }} onClick={onClick}>
          <TopTweet
            style={{ fill: theme.palette.buttonWidget?.contrastText }}
          />
        </IconButton>
      )}
    </Container>
  );
};
