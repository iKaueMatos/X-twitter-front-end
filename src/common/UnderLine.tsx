import theme from '@/theme/theme';
import { Box } from '@mui/material';
import React from 'react';

export default function UnderLine() {
  return (
    <Box
      sx={{
        borderBottom: `1px solid ${theme.palette.border?.main}`,
      }}
    />
  );
};