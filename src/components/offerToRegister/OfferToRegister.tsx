import SignUpTemplate from '@/forms/templates/SignUpTemplate';
import { useSignUpMutation } from '@/query/authorization/authorization.mutation';
import { IAuthSignUpRequest } from '@/services/types';
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FieldErrors, SubmitHandler, useForm, UseFormReturn } from 'react-hook-form';


interface ISignUpTemplate {
  authRegisterForm: UseFormReturn<IAuthSignUpRequest>;
  onSubmitForm: (e: React.FormEvent) => void;
  isLoading: boolean;
  openPopup: boolean;
  setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setIsVerify: React.Dispatch<React.SetStateAction<boolean>>;
  isError: boolean;
  error: FieldErrors<FormData> | AxiosError;
}

export default function RegisterForm() {
  const theme = useTheme();
  const { push } = useRouter();
  const [openPopup, setOpenPopup] = useState(false);
  const [isVerify, setIsVerify] = useState(false);
  const { register, handleSubmit, reset } = useForm<IAuthSignUpRequest>();

  const { mutateAsync: mutateSignUp, data, isLoading, isError, error } = useSignUpMutation();

  useEffect(()=>{
    data && setOpenPopup(true);
    data && reset
  },[data, reset])

  const requestRegister: SubmitHandler<IAuthSignUpRequest> = (value) => {
    mutateSignUp(value);
  };

  const onSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
    handleSubmit(requestRegister)();
  };

  isVerify && push('/signIn');

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        position: 'relative',
      }}
    >
      <SignUpTemplate
          onSubmitForm={onSubmitForm}
          isLoading={isLoading}
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
          setIsVerify={setIsVerify}
          isError={isError}
          error={error as AxiosError}
        />
      </Container>
  );
}
