import React, { FC } from 'react';
import { Box, Button, useTheme } from '@mui/material';
import ShareSVG from '@/assets/icons/Share.svg';

interface IButtonShare {
  id: number;
}


const ButtonShare: FC<IButtonShare> = ({
  id,
}) => {
  const theme = useTheme();
  const notSelectedColor = theme.palette.buttonWidget?.main;
  const onChangeShare = () => {
    console.log('onChangeShare: ', id);
  };
 
  const toggleStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: 1.25,
    minWidth: '40px',
    p: 0,
    border: 'none',
  };
  return (
    <Button onClick={onChangeShare} sx={toggleStyles}>
      <Box sx={{ display: 'flex', stroke: notSelectedColor }}>
        <ShareSVG />
      </Box>
    </Button>
  );
};

export default ButtonShare;
