import React from 'react';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import { Button, Container, Link, Box, useTheme } from '@mui/material';
import { useLogoutQuery } from '@/query/authorization/authorization.query';

export default function Home() {
  const { refetch: logout } = useLogoutQuery();
  const theme = useTheme();
  const btnTheme = {
    fontFamily: theme.typography.button.fontFamily,
    fontStyle: theme.typography.button.fontStyle,
    fontWeight: theme.typography.button.fontWeight,
    fontSize: theme.typography.button.fontSize,
    lineHeight: theme.typography.button.lineHeight,
    color: theme.typography.button.color,
  };

  return (
    <>
      <DefaultSeo title="Menu de Inicialização" {...SEO} />
      <Container
        disableGutters
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 1,
          p: 1,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Button
            component={Link}
            href="/signUp"
            variant="contained"
            sx={btnTheme}
          >
            Página de Cadastro
          </Button>
          <Button
            component={Link}
            href="/signIn"
            variant="contained"
            sx={btnTheme}
          >
            Página de Login
          </Button>
          <Button
            component={Link}
            href="/logout"
            variant="contained"
            sx={btnTheme}
          >
            Página de Logout (Visualizar)
          </Button>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Button
            component={Link}
            href="/home"
            variant="contained"
            sx={btnTheme}
          >
            Página Inicial
          </Button>
          <Button
            component={Link}
            href="/explore"
            variant="contained"
            sx={btnTheme}
          >
            Página Explorar
          </Button>
          <Button
            component={Link}
            href="/profile"
            variant="contained"
            sx={btnTheme}
          >
            Página de Perfil
          </Button>
          <Button
            component={Link}
            href="/404"
            variant="contained"
            sx={btnTheme}
          >
            Página não encontrada
          </Button>
        </Box>

        <Button onClick={() => logout()} variant="contained" sx={btnTheme}>
          Logout de Autenticação
        </Button>
      </Container>
    </>
  );
};