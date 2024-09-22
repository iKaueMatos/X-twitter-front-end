import { TextField } from '@mui/material';
import React from 'react';
import InputMask from 'react-input-mask';

interface MyInputMaskProps {
  mask: string;
  [key: string]: any;
}

export default function MyInputMask({ mask, ...otherProps }: MyInputMaskProps) {
  return (
    <InputMask mask={mask} {...otherProps}>
      {(inputProps) => <TextField {...inputProps} />}
    </InputMask>
  );
};