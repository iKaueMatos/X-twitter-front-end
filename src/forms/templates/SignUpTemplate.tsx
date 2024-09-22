import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FieldErrors, UseFormReturn } from 'react-hook-form';
import {
  Typography,
  TextField,
  Button,
  Container,
  Box,
  useTheme,
  Alert,
  CircularProgress,
} from '@mui/material';

import VerifyForm from '../VerifyForm';
import { IAuthSignUpRequest } from '@/services/types';
import { IErrorData } from '../types';
import axios, { AxiosError } from 'axios';

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

export default function SignUpTemplate({
  authRegisterForm,
  onSubmitForm,
  isLoading,
  openPopup,
  setOpenPopup,
  setIsVerify,
  isError,
  error,
}: ISignUpTemplate) {
  const theme = useTheme();
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (isError && error) {
      if (axios.isAxiosError(error)) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage(Object.values(error).map((e) => e.message).join(', '));
      }
    }
  }, [error, isError]);

  return (
    <>
      <Container
        component="form"
        onSubmit={onSubmitForm}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '452px',
          position: 'relative',
          padding:"16px"
        }}
      >
        {isLoading && <CircularProgress sx={{ position: 'absolute', m: 1 }} />}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            rowGap: '25px',
            maxWidth: 450,
            width: '100%',
            alignItems: 'center'
          }}
        >
          <Image
            width={50}
            height={41}
            alt="twitter icon"
            src="/icons/twitter-logo.png"
          />
          <Typography variant="h1" ml="13px">
            {' '}
            Junte-se ao Twitter hoje{' '}
          </Typography>
          <TextField
            id="name"
            label="Nome"
            type="text"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="email"
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="password"
            label="Senha"
            type="password"
            variant="outlined"
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              borderRadius: '100px',
              p: '14px',
              fontSize: theme.typography.button.fontSize,
              fontWeight: theme.typography.button.fontWeight,
              textTransform: 'inherit',
              color: theme.typography.button.color,
            }}
          >
            Inscreva-se
          </Button>
          {isError && <Alert severity="warning">{errorMessage}</Alert>}
        </Box>
      </Container>

      {!isError && (
        <VerifyForm
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
          setIsVerify={setIsVerify}
        />
      )}
    </>
  );
}
