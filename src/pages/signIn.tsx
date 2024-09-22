import React from 'react';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import SignInForm from '../forms/SignInForm';

export default function Login() {
  return (
    <>
      <DefaultSeo title="Login" {...SEO} />
      <SignInForm />
    </>
  );
};