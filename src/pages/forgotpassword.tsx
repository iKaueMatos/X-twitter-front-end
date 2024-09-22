import React from 'react';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import ForgotPasswordForm from '@/forms/ForgotPasswordForm';

export default function ForgotPassword() {
  return (
    <>
      <DefaultSeo title="Inscreva-se no Twitter" {...SEO} />
      <ForgotPasswordForm />
    </>
  );
};
