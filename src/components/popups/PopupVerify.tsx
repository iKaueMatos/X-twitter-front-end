import React, { FC, ReactNode } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Container, SxProps, Theme, useTheme } from '@mui/material';

interface IPopupVerify {
  title: string;
  contentText?: string;
  children: ReactNode;
  openPopup: boolean;
  setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
  onPopupSubmit: () => void;
  sx?: SxProps<Theme>;
}

export default function PopupVerify({
  title,
  contentText,
  children,
  openPopup,
  setOpenPopup,
  onPopupSubmit,
  sx
}: IPopupVerify) {
  const theme = useTheme();

  return (
    <Container sx={{ position: 'absolute' }}>
      <Dialog
        open={openPopup}
        onClose={() => {
          setOpenPopup(false);
        }}
      >
        <DialogTitle
          sx={[
            { background: theme.palette.primary.light },
            ...(Array.isArray(sx) ? sx : [sx]),
          ]}
        >
          {title}
        </DialogTitle>
        <DialogContent sx={{ background: theme.palette.primary.light }}>
          {contentText && <DialogContentText>{contentText}</DialogContentText>}

          {children}
        </DialogContent>
        <DialogActions sx={{ background: theme.palette.primary.light }}>
          <Button
            onClick={() => {
              setOpenPopup(false);
            }}
          >
            Cancel
          </Button>
          <Button onClick={onPopupSubmit}>Enviar</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};
