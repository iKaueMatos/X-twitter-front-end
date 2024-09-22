import { Container, List, ListItem, Typography, useTheme } from '@mui/material';
import React from 'react';

const Description = () => {
  const theme = useTheme();
  return (
    <Container>
      <Typography>
        Nosso aplicativo é destinado a usuários que desejam criar seu próprio blog ou rede social, onde os usuários podem compartilhar suas ideias e experiências. O aplicativo oferece as seguintes funcionalidades:
      </Typography>
      <List>
        <ListItem sx={{ fontFamily: theme.typography.h5.fontFamily }}>
          1. Criação de postagens: os usuários podem criar suas próprias postagens e adicionar fotos.
        </ListItem>
        <ListItem sx={{ fontFamily: theme.typography.h5.fontFamily }}>
          2. Exibição de postagens: os usuários podem visualizar suas postagens e as postagens de outros usuários de forma conveniente.
        </ListItem>
        <ListItem sx={{ fontFamily: theme.typography.h5.fontFamily }}>
          3. Registro: novos usuários precisam se registrar no sistema, inserindo seus dados pessoais, como nome de usuário, e-mail e senha.
        </ListItem>
        <ListItem sx={{ fontFamily: theme.typography.h5.fontFamily }}>
          4. Login: os usuários registrados podem facilmente acessar o sistema usando suas credenciais.
        </ListItem>
        <ListItem sx={{ fontFamily: theme.typography.h5.fontFamily }}>
          5. Autorização via token JWT: a segurança e a privacidade dos dados do usuário são prioridades principais do nosso aplicativo, e para isso usamos o token JWT, que confirma a autorização do usuário e garante a proteção de seus dados pessoais.
        </ListItem>
      </List>
    </Container>
  );
};

export default Description;
