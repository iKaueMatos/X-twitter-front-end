import React from 'react'
import { ListItemIcon, useTheme } from '@mui/material';

import GifSVG from '@/assets/icons/Gif.svg';

export default function GifButton() {
  const theme = useTheme();
  const iconColor = theme.palette.buttonWidget?.contrastText || '#000000';
  return (
    <ListItemIcon
      sx={{
        minWidth: 'auto'
      }}
    >
      <GifSVG style={{ fill: iconColor }} />
    </ListItemIcon>
  );
};