import React, { FC } from 'react';
import { Box, Typography, useTheme } from '@mui/material';

interface IPassedTime {
  date: string;
}

export default function PassedTime({ date }: IPassedTime) {
  const theme = useTheme();
  const ms = new Date().getTime() - new Date(date).getTime()
  const days = Math.floor(ms / (24 * 60 * 60 * 1000));
  const daysms = ms % (24 * 60 * 60 * 1000);
  const hours = Math.floor(daysms / (60 * 60 * 1000));
  const hoursms = ms % (60 * 60 * 1000);
  const minutes = Math.floor(hoursms / (60 * 1000));
  const minutesms = (ms % 60) * 1000;
  const seconds = Math.floor(minutesms / 1000);

  let dateResult = '';
  if (days > 0) { dateResult += days + 'd ago'; }
  if (days === 0 && hours > 0) { dateResult += hours + 'h ago'; }
  if (days === 0 && hours === 0 && minutes > 0) { dateResult += minutes + 'm ago'; }
  if (days === 0 && hours === 0 && minutes === 0 && seconds > 0) { dateResult += seconds + 's ago'; }
  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) { dateResult += ' now'; }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '4px',
        whiteSpace: 'nowrap',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 500,
          color: theme.palette.secondary.main,
        }}
      >
        ·
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 500,
          color: theme.palette.secondary.main,
        }}
      >
        {dateResult}
      </Typography>
    </Box>
  );
};