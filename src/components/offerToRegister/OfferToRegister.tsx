import {
  Box,
  Button,
  Container,
  Link,
  Typography,
  useTheme,
} from '@mui/material';
import React from 'react';

export default function OfferToRegister() {
  const theme = useTheme();
  return (
    <Container
      disableGutters
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        rowGap: '10px',
        maxWidth: 350,
        width: '100%',
        p: '10px',
        border: `1px solid ${theme.palette.border?.main}`,
        borderRadius: '16px',
      }}
    >
      <Typography variant="h2" sx={{ padding: '0px 16px 0px 16px' }}>
        Primeira vez no Twitter?
      </Typography>
      <Typography variant="h6" sx={{ padding: '0 12px' }}>
        Cadastre-se agora para personalizar o seu feed!
      </Typography>
      <Button
        component={Link}
        href="/signUp"
        variant="contained"
        sx={{
          height: '40px',
          borderRadius: '100px',
          m: '16px 12px 16px 12px',
          textTransform: 'inherit',
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
        Registrar-se
      </Button>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          p: '9px 12px 9px 12px',
        }}
      >
        <Typography variant="h6">Já tem uma conta?</Typography>
        <Button
          component={Link}
          href="/signIn"
          variant="contained"
          sx={{
            height: '40px',
            borderRadius: '100px',
            textTransform: 'inherit',
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
          Login
        </Button>
      </Box>
      <Typography variant="h6" sx={{ padding: '0 12px' }}>
        Ao se registrar, você concorda com os termos de serviço e entrega sua alma.
      </Typography>
    </Container>
  );
};
