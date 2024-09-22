import React, { FC, useState } from 'react';
import { Box, Button, Typography, useTheme } from '@mui/material';
import RetweetSVG from '@/assets/icons/Retweet.svg';
import { IDataRetweetTo } from '../types';
import { useMakeRetweetMutation } from '@/query/retweet/addRetweet.mutation';
import { useDeleteRetweetMutation } from '@/query/retweet/deleteRetweet.mutation';

interface IButtonRetweet {
  id: number;
  isRetweeted: boolean;
  retweets: number;
  retweetTo?: IDataRetweetTo | null;
}

const ButtonWidget: FC<IButtonRetweet> = ({ id, retweets, isRetweeted }) => {
  const theme = useTheme();
  const [isActive, setActive] = useState(isRetweeted);
  const [retweetCount, setRetweetCount] = useState(retweets);
  const { mutateAsync: mutateMakeRetweet } = useMakeRetweetMutation();
  const { mutateAsync: mutateDeleteRetweet } = useDeleteRetweetMutation();

  const notSelectedColor = theme.palette.buttonWidget?.main;
  const selectedColor = theme.palette.buttonWidget?.contrastText;
  const strokeColor = isActive ? selectedColor : notSelectedColor;

  const toggleStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: 1.25,
    minWidth: '40px',
    p: 0,
    border: 'none',
  };

  const onClick = async () => {
    if (isActive) {
      await mutateDeleteRetweet(id);
      await setActive(false);
      await setRetweetCount((retweetCount) => retweetCount - 1);
    } else {
      await mutateMakeRetweet(id);
      await setActive(true);
      await setRetweetCount((retweetCount) => retweetCount + 1);
    }
  };

  return (
    <Button onClick={onClick} sx={toggleStyles}>
      <Box sx={{ display: 'flex', stroke: strokeColor }}>
        <RetweetSVG />
      </Box>
      <Typography
        variant="h5"
        fontWeight={500}
        sx={{ color: notSelectedColor }}
      >
        {retweetCount}
      </Typography>
    </Button>
  );
};

export default ButtonWidget;
