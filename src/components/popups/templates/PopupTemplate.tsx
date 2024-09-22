import React, { ReactNode } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {
  Box,
  Button,
  Container,
  IconButton,
  SxProps,
  Theme,
  useTheme,
} from '@mui/material';
import CloseSVG from '@/assets/icons/Close.svg';

interface IPopupTemplate {
  title?: string;
  contentText?: string;
  children: ReactNode;
  openPopup: boolean;
  setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
  sx?: SxProps<Theme>;
  onSubmit?: () => void;
}

export default function PopupTemplate({
  title,
  contentText,
  sx,
  onSubmit,
  children,
  openPopup,
  setOpenPopup,
}: IPopupTemplate) {
  const theme = useTheme();

  return (
    <Container disableGutters sx={{ position: 'absolute' }}>
      <Dialog
        open={openPopup}
        onClose={() => {
          setOpenPopup(false);
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            p: '10px',
            background: theme.palette.primary.light,
          }}
        >
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap={1}
            sx={[{ background: 'inherit' }, ...(Array.isArray(sx) ? sx : [sx])]}
          >
            <IconButton
              sx={{ padding: '0' }}
              onClick={() => {
                setOpenPopup(false);
              }}
            >
              <CloseSVG width="30px" height="30px" />
            </IconButton>
            {title && (
              <DialogTitle sx={{ padding: 0, margin: 0 }}>{title}</DialogTitle>
            )}
          </Box>
          {onSubmit && (
            <Button
              variant="contained"
              onClick={() => {
                onSubmit();
                setOpenPopup(false);
              }}
              sx={{
                background: theme.palette.primary.dark,
                borderRadius: '100px',
                width: '77px',
                height: '39px',
                fontFamily: 'button.fontFamily',
                fontStyle: 'button.fontStyle',
                fontWeight: 'button.fontWeight',
                fontSize: 'button.fontSize',
                lineHeight: 'button.lineHeight',
                color: 'primary.light',
                ':hover': {
                  background: theme.palette.primary.contrastText,
                },
              }}
            >
              Save
            </Button>
          )}
        </Box>
        <DialogContent sx={{ p: '0 0 20px 0', background: theme.palette.primary.light }}>
          {contentText && <DialogContentText>{contentText}</DialogContentText>}
          {children}
        </DialogContent>
      </Dialog>
    </Container>
  );
}
