import React, { FC, useState } from 'react';
import { Input, Typography, useTheme } from '@mui/material';
import { Control, Controller } from 'react-hook-form';
import MediaSVG from '@/assets/icons/Media.svg';
import { IAddTweetRequest } from '@/services/types';

interface IMediaButton {
  control: Control<IAddTweetRequest>;
}

export default function MediaButton({ control }: IMediaButton) {
  const theme = useTheme();
  const iconColor = theme.palette.buttonWidget?.contrastText || '#000000';
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  return (
    <Controller
      name="file"
      control={control}
      render={({ field: { value, onChange, ...field } }) => (
        <>
          <Input style={{ display: 'none' }} type="file" id="upload" {...field} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const files = event.target.files;
            if (files && files.length > 0) {
              console.log('file added');
              setSelectedFile(files[0]);
              onChange(files[0]);
            }
          }} />
          <label htmlFor="upload" style={{ display: 'flex', gap: '5px', cursor: 'pointer', height: '20px', padding: '0px 0 0px 0' }}>
            <MediaSVG style={{ fill: iconColor }} />
            {selectedFile && <Typography>+1</Typography>}
          </label>
        </>
      )}
    />
  )
}
