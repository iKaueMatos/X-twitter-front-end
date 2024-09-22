import React from 'react'
import { ListItemIcon, useTheme } from '@mui/material';

import EmojiSVG from '@/assets/icons/Emoji.svg';

export default function EmojiButton() {
  const theme = useTheme();
  const iconColor = theme.palette.buttonWidget?.contrastText || '#000000';
  return (
    <ListItemIcon
      sx={{
        minWidth: 'auto'
      }}
    >
      <EmojiSVG style={{ fill: iconColor }} />
    </ListItemIcon>
  );
};