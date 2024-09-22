import React from 'react';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import LogoutView from '@/views/logout/LogoutView';
import { Container } from '@mui/material';

export default function Logout() {
  return (
    <>
      <DefaultSeo title="Bem-vindo ao Twitter" {...SEO} />
      <Container>
        <LogoutView />
      </Container>
    </>
  );
};