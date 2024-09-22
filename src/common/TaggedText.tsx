import { Typography } from '@mui/material';
import React, { FC } from 'react';

interface ITaggedText {
  text: string;
  tagSymbol?: string;
  color?: string;
}

export default function TaggedText({
  text = 'null',
  tagSymbol = '@',
  color = 'inherit',
}: ITaggedText) {
  return (
    <Typography variant="h6" color={color}>
      {tagSymbol +
        text.toLowerCase().replace(/[\s~'@#%&*()\-_=+[\]}\\;:'",<.>/?]/g, '')}
    </Typography>
  );
};