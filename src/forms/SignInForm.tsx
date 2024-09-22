import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import SignInTemplate from './templates/SignInTemplate';
import { useLoginMutation } from '@/query/authorization/authorization.mutation';
import { IAuthLoginRequest } from '@/services/types';
import { AxiosError } from 'axios';

export default function SignInForm() {
  const { push } = useRouter();
  const { register: loginRegisterForm, handleSubmit: loginhandleSubmitForm, reset: loginResetForm } = useForm<IAuthLoginRequest>();
  const { mutateAsync: mutateLogin, isLoading, isSuccess, isError, error } = useLoginMutation();

  const customHandleSubmit = (data: IAuthLoginRequest) => { mutateLogin(data); loginResetForm() };
  const onSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
    loginhandleSubmitForm(customHandleSubmit)();
  };

  isSuccess && push('/');

  return (
    <SignInTemplate
      loginRegisterForm={loginRegisterForm}
      onSubmitForm={onSubmitForm}
      isLoading={isLoading}
      isError={isError}
      error={error as AxiosError}
    />
  );
};
