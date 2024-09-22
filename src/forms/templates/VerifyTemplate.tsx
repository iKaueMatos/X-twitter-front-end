import React, { useEffect, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Alert, CircularProgress, Container, TextField } from '@mui/material';
import PopupVerify from '@/components/popups/PopupVerify';
import { IAuthVerifyRequest } from '@/services/types';
import { AxiosError } from 'axios';
import { IErrorData } from '../types';

interface IVerifyTemplate {
  openPopup: boolean;
  setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmitForm: () => void;
  verifyRegisterForm: UseFormRegister<IAuthVerifyRequest>;
  isLoading: boolean;
  isError: boolean;
  error?: AxiosError;
}

export default function VerifyTemplate({
  openPopup,
  setOpenPopup,
  onSubmitForm,
  verifyRegisterForm,
  isLoading,
  isError,
  error,
}: IVerifyTemplate) {
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    isError && error && !error.response?.status && setErrorMessage(error.message)
    isError && error && error.response && error.response?.status && setErrorMessage((error.response.data as IErrorData).message)
    isError && error && console.log(error && error.response?.status);
  }, [error, isError])

  return (
    <Container disableGutters sx={{ position: 'absolute' }}>
      {isLoading && <CircularProgress sx={{ position: 'absolute', m: 1 }} />}
      <PopupVerify
        title="Activate"
        contentText="Please enter this verification code to get started on Twitter:"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        onPopupSubmit={() => onSubmitForm()}
      >
        {isError && <Alert severity="warning">{errorMessage}</Alert>}
        <TextField
          {...verifyRegisterForm('activationCode')}
          id="verif"
          label="Verification code"
          type="text"
          variant="outlined"
          margin="dense"
          fullWidth
        />
      </PopupVerify>
    </Container>
  );
};