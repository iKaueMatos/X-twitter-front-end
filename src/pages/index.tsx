import React from 'react';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import HomeView from '@/views/home/HomeView';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container } from '@mui/material';
import { check } from '../api/authCheck';

export default function Home() {
  const { push } = useRouter();

  useEffect(() => {
    check().then((res) => !res && push('/logout'));
  }, [push]);

  return (
    <>
      <DefaultSeo title="Inicio" {...SEO} />
      <Container className='page-home' disableGutters>
        <HomeView />
      </Container>
    </>
  );
};
