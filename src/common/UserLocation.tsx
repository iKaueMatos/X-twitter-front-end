import React, { FC } from 'react';
import {
  Box,
  IconButton,
  ListItemIcon,
  Typography,
  useTheme,
} from '@mui/material';
import LocationSVG from '@/assets/icons/Location.svg';

interface IUserLocation {
  userLocation: string;
}

export default function UserLocation({ userLocation }: IUserLocation) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 1,
      }}
    >
      <IconButton sx={{ p: 0 }}>
        <ListItemIcon sx={{ minWidth: '100%' }}>
          <LocationSVG
            fill={theme.palette.secondary.main}
            width="20"
            height="20"
          />
        </ListItemIcon>
      </IconButton>
      <Typography
        variant="h6"
        sx={{
          color: theme.palette.secondary.main,
          letterSpacing: '-0.02em',
        }}
      >
        {userLocation}
      </Typography>
    </Box>
  );
};
