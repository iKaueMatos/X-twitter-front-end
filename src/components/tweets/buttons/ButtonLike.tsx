import React, { FC, useState } from 'react';
import { Box, ToggleButton, Typography, useTheme } from '@mui/material';
import LikeSVG from '@/assets/icons/Like.svg';
import {
  useLikeMutation,
  useDeleteLikeMutation,
} from '@/query/likes/likes.mutation';

interface IButtonLike {
  id: number;
  likes: number;
  isLiked: boolean;
}

const ButtonLike: FC<IButtonLike> = ({ id, likes, isLiked }) => {
  const theme = useTheme();
  const [isActive, setActive] = useState(isLiked);
  const [likesCount, setLikesCount] = useState(likes);
  const { mutateAsync: mutateMakeLike } = useLikeMutation();
  const { mutateAsync: mutateDeleteLike } = useDeleteLikeMutation();

  const notSelectedColor = theme.palette.buttonLike?.main;
  const selectedColor = theme.palette.buttonLike?.contrastText;
  const strokeColor = isActive ? selectedColor : notSelectedColor;
  const fillColor = isActive ? selectedColor : 'none';

  const toggleStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: 1.25,
    minWidth: '40px',
    p: 0,
    background: 'none!important',
    border: 'none',
  };

  const onChange = async () => {
    if (isActive) {
      await mutateDeleteLike(id);
      await setActive(false);
      setLikesCount((likesCount) => likesCount - 1);
    } else {
      await mutateMakeLike(id);
      await setActive(true);
      setLikesCount((likesCount) => likesCount + 1);
    }
  };

  return (
    <ToggleButton
      value="check"
      selected={isLiked}
      onChange={onChange}
      sx={toggleStyles}
    >
      <Box
        sx={{
          display: 'flex',
          strokeWidth: 2,
          stroke: strokeColor,
          fill: fillColor,
        }}
      >
        <LikeSVG />
      </Box>
      <Typography
        variant="h5"
        fontWeight={500}
        sx={{ color: notSelectedColor }}
      >
        {likesCount}
      </Typography>
    </ToggleButton>
  );
};

export default ButtonLike;
