import React, { FC } from 'react';
import { Box, Button, Typography } from '@mui/material';
import ViewsSVG from '@/assets/icons/Views.svg';

interface IButtonViews {
  views: number;
}

const ButtonViews: FC<IButtonViews> = ({
  views,
}) => {

  return (
    <Button sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 1.25,
      minWidth: '40px',
      p: 0,
      border: 'none',
    }}>
      <Box sx={{ display: 'flex', stroke: 'buttonWidget.main' }}><ViewsSVG /></Box>
      <Typography
        variant="h5"
        fontWeight={500}
        color='buttonWidget.main'
      >
        {views}
      </Typography>
    </Button>
  );
};

export default ButtonViews;
