import React from 'react';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import NotFoundPageView from '@/views/404/404';
import { NextSeo } from 'next-seo';

export default function NotFoundPage() {
  return (
    <>
      <DefaultSeo title="Página não encontrada" {...SEO} />
      <NextSeo noindex={true} />
      <NotFoundPageView />
    </>
  );
};