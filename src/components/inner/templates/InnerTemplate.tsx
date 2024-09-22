import React, { FC } from 'react';
import {
  Container,
  Box,
  TextField,
  Button,
  useTheme,
} from '@mui/material';
import CustomAvatar from '../../avatar/CustomAvatar';
import { IAddTweetRequest } from '@/services/types';
import { UseFormHandleSubmit, UseFormRegister, Control } from 'react-hook-form';
import MediaButton from './widgetBar/MediaButton';
import GifButton from './widgetBar/GifButton';
import PollButton from './widgetBar/PollButton';
import EmojiButton from './widgetBar/EmojiButton';
import ScheduleButton from './widgetBar/ScheduleButton';

interface IInnerTemplate {
  avatarUrl?: string;
  avatarAlt?: string;
  control: Control<IAddTweetRequest>;
  register: UseFormRegister<IAddTweetRequest>;
  handleSubmit: UseFormHandleSubmit<IAddTweetRequest>;
  onSubmit: (requestData: IAddTweetRequest) => void;
}

export default function InnerTemplate({
  avatarUrl,
  avatarAlt,
  control,
  register,
  handleSubmit,
  onSubmit,
}: IInnerTemplate) {
  const theme = useTheme();

  return (
    <Container
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '0 13px',
        padding: '10px 15px',
      }}
    >
      {avatarUrl && <CustomAvatar img={avatarUrl} alt={avatarAlt} />}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: 1,
        }}
      >
        <TextField
          {...register('text')}
          type="text"
          placeholder="O que está acontecendo?"
          minRows={3}
          multiline
          required={true}
          fullWidth
          color="primary"
          sx={{
            minHeight: 18,
            fontSize: 20,
            lineHeight: 22,
            outline: 'none',
            border: 'none',
            resize: 'none',
            fontFamily: 'system-ui',
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
          }}
        />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '10px 0',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '5px', }}>
            <MediaButton control={control} />
            <GifButton />
            <PollButton />
            <EmojiButton />
            <ScheduleButton />
          </Box>
          <Button
            type="submit"
            variant="contained"
            sx={{
              borderRadius: '100px',
              width: '77px',
              height: '39px',
              fontFamily: theme.typography.button.fontFamily,
              fontStyle: theme.typography.button.fontStyle,
              fontWeight: theme.typography.button.fontWeight,
              fontSize: theme.typography.button.fontSize,
              lineHeight: theme.typography.button.lineHeight,
              color: theme.typography.button.color,
              ':hover': {
                background: theme.palette.primary.contrastText,
              },
            }}
          >
            Tweet
          </Button>
        </Box>
      </Box>
    </Container>
  );
};