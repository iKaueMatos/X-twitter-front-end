import React, { FC } from 'react';
import { Box, Container, Typography } from '@mui/material';
import TaggedText from '@/common/TaggedText';
import VerifiedIcon from '@/ui/icon/VerifiedIcon';
interface IUserHeader {
  name: string;
  tag: string;
  isVerified?: boolean;
}

export default function UserHeader({ name, tag, isVerified }: IUserHeader) {

  return (
    <Container
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 1,
        width: 'auto',
        m: 0,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '0 8px',
        }}
      >
        <Box sx={{ display: 'flex', gap: '8px' }}>
          <Typography variant="h5" fontWeight={700}>{name}</Typography>
          {isVerified && <VerifiedIcon />}
        </Box>
        <TaggedText color="tag.contrastText" tagSymbol="@" text={tag} />
      </Box>
    </Container>
  );
};