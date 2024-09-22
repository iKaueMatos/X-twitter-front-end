import React from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import SignUpTemplate from '@/forms/templates/SignUpTemplate';
import signupSchema from './schemas/signup.scema';

type FormData = {
  username: string;
  email: string;
  password: string;
};

type ActivationData = {
  code: string;
};

export default function SignUpPageForm() {
  const { push } = useRouter();
  const [open, setOpen] = React.useState(false);
  
  const methods = useForm<FormData>({
    mode: 'onBlur',
    resolver: yupResolver(signupSchema),
  });

  const { handleSubmit, formState: { errors } } = methods;
  const onFormSubmit: SubmitHandler<FormData> = async (user) => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
        username: user.username,
        email: user.email,
        password: user.password,
      }, {
        headers: { "Content-Type": 'application/json' },
      });

      if (response.status === 200) {
        handleClickOpen();
      }
    } catch (error) {
      console.error("Erro ao registrar:", error);
    }
  };

  const methodsActivation = useForm<ActivationData>({
    mode: 'onBlur',
  });

  const { handleSubmit: handleSubmitActivation } = methodsActivation;
  const onSubmit: SubmitHandler<ActivationData> = async (data) => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/auth/activate', {
        params: { activationCode: data.code },
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status === 200) {
        push('/');
      }
    } catch (error) {
      console.error("Erro na ativação:", error);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      {errors && (
        <Alert severity="error">
          <AlertTitle>Erro</AlertTitle>
          {Object.values(errors).map((error) => (
            <div key={error.message}>{error.message}</div>
          ))}
        </Alert>
      )}

      <FormProvider {...methods}>
        <Box component="form" onSubmit={handleSubmit(onFormSubmit)}>
          <SignUpTemplate
            authRegisterForm={methods}
            onSubmitForm={handleSubmit(onFormSubmit)}
            isLoading={false}
            openPopup={open}
            setOpenPopup={setOpen}
            setIsVerify={() => {}}
            isError={!!errors}
            error={errors}
          />
        </Box>
        
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Confirme seu endereço de e-mail</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Por favor, verifique seu e-mail e insira o código de verificação para começar:
            </DialogContentText>
            <TextField
              {...methodsActivation.register("code")}
              autoFocus
              margin="dense"
              id="code"
              label="Código de verificação"
              type="text"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSubmitActivation(onSubmit)}>Confirmar</Button>
            <Button onClick={() => setOpen(false)}>Cancelar</Button>
          </DialogActions>
        </Dialog>
      </FormProvider>
    </>
  );
}
