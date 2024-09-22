import * as React from 'react';
import { FC } from 'react';
import Image from 'next/image';
import { Box, useTheme } from '@mui/material';
import defaultAvatar from '@/assets/images/BlankAvatar.jpg';

interface IAvatar {
  img?: string | null;
  alt?: string | null;
  width?: number;
  height?: number;
}

export default function CustomAvatar({ img, alt, width = 48, height = 48 }: IAvatar) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        outline: `5px solid ${theme.palette.primary.light}`,
        borderRadius: '50%',
        overflow: 'hidden',
        width: `${width}px`,
        height: `${height}px`,
        flex: '0 0 auto',
      }}
    >
      <Image
        priority={true}
        width={width}
        height={height}
        style={{ objectFit: 'contain', transform: 'scale(1.1)' }}
        src={img ? img : defaultAvatar}
        alt={alt ? alt : 'defaultAvatar'}
      />
    </Box>
  );
};