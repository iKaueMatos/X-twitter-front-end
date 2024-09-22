import React from 'react';
import { Avatar, Box, Paper, Typography } from '@mui/material';
import { Container, useTheme } from '@mui/system';
import TaggedText from '@/common/TaggedText';
import Location from '../Location';
import JoinDate from '../JoinDate';

interface IUserInfoTemplate {
  avatarUrl?: string;
  username: string | 'null';
  tag: string | 'null';
  bio?: string;
  location?: string;
  joinDate?: string;
}

export default function UserInfoTemplate({
  avatarUrl,
  username,
  tag,
  bio,
  location,
  joinDate,
}: IUserInfoTemplate) {
  const theme = useTheme();
  return (
    <Container disableGutters sx={{ marginBottom: '10px' }}>
      <Paper
        variant="elevation"
        square
        sx={{
          background: theme.palette.primary.main,
          width: '100%',
          height: '100px',
        }}
      ></Paper>
      <Box display="flex" flexDirection="column" gap={1} mx={2}>
        <Box marginTop="-75px">
          <Avatar component="div" src={avatarUrl} alt={avatarUrl} sx={{ width: 50, height: 50 }} />
        </Box>
        <Typography variant="h2">{username}</Typography>
        {tag && <TaggedText color="tag.contrastText" tagSymbol="@" text={tag} />}
        {bio && (
          <Typography variant="h4" my={1}>
            {' '}
            {bio}{' '}
          </Typography>
        )}
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
          {location && <Location location={location} />}
          {joinDate && <JoinDate joinDate={joinDate} />}
        </Box>
      </Box>
    </Container>
  );
};