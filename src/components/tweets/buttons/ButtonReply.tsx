import React, { FC, useState } from 'react';
import { Box, Button, Typography, useTheme } from '@mui/material';
import ReplySVG from '@/assets/icons/Reply.svg';
import InnerReply from '../../inner/InnerReply';
import PopupReply from '../../popups/PopupReply';
import { IDataReplyTo } from '../types';

interface IButtonReply {
  replies: number;
  replyToId: number;
  replyTo: IDataReplyTo | null
}

const ButtonWidget: FC<IButtonReply> = ({ replies, replyToId, replyTo }) => {
  /* TODO replyTo */
  const theme = useTheme();
  const toggleStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: 1.25,
    minWidth: '40px',
    p: 0,
    border: 'none',
  };

  const [isReplyPopupOpen, setReplyPopupOpen] = useState(false);

  const onClickReply = () => {
    setReplyPopupOpen(true);
  };

  const onSubmitReply = () => {
    setReplyPopupOpen(false);
  };

  return (
    <>
      <Button onClick={onClickReply} sx={toggleStyles}>
        <Box sx={{ display: 'flex', stroke: theme.palette.buttonWidget?.main }}>
          <ReplySVG />
        </Box>
        <Typography variant="h5" fontWeight={500} color="buttonWidget.main">
          {replies}
        </Typography>
      </Button>
      {isReplyPopupOpen && (
        <PopupReply
          sx={{ minWidth: { sx: 0, sm: '600px' } }}
          title="Retweet"
          openPopup={isReplyPopupOpen}
          setOpenPopup={setReplyPopupOpen}
        >
          <InnerReply replyToId={replyToId} onSubmitReply={onSubmitReply} />
        </PopupReply>
      )}
    </>
  );
};

export default ButtonWidget;
