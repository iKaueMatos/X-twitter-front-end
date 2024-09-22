import React from 'react'
import { ListItemIcon, useTheme } from '@mui/material';

import ScheduleSVG from '@/assets/icons/Schedule.svg';

export default function ScheduleButton() {
  const theme = useTheme();
  const iconColor = theme.palette.buttonWidget?.contrastText || '#000000';
  return (
    <ListItemIcon
      sx={{
        minWidth: 'auto'
      }}
    >
      <ScheduleSVG style={{ fill: iconColor }} />
    </ListItemIcon>
  );
};