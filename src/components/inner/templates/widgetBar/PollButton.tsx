import React from 'react'
import { ListItemIcon, useTheme } from '@mui/material';

import PollSVG from '@/assets/icons/Poll.svg';

export default function PollButton() {
  const theme = useTheme();
  const iconColor = theme.palette.buttonWidget?.contrastText || '#000000';
  return (
    <ListItemIcon
      sx={{
        minWidth: 'auto'
      }}
    >
      <PollSVG style={{ fill: iconColor }} />
    </ListItemIcon>
  );
};