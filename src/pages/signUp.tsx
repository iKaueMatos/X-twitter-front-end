import React from 'react';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import SignUpForm from '../forms/SignUpForm';

export default function SignUp() {
  return (
    <>
      <DefaultSeo title="Inscreva-se no Twitter" {...SEO} />
      <main>
        <SignUpForm />
      </main>
    </>
  );
};