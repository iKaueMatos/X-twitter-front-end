import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import VerifyTemplate from './templates/VerifyTemplate';
import { useVerificationMutation } from '@/query/authorization/authorization.mutation';
import { IAuthVerifyRequest } from '@/services/types';
import { AxiosError } from 'axios';

interface IVerifyTemplate {
  openPopup: boolean;
  setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setIsVerify: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function VerifyForm({ openPopup, setOpenPopup, setIsVerify }: IVerifyTemplate) {
  const { register: verifyRegisterForm, handleSubmit, reset } = useForm<IAuthVerifyRequest>();
  const { mutateAsync: mutateVerifyEmail, isLoading, isSuccess, isError, error } = useVerificationMutation();
  useEffect(() => { setIsVerify(isSuccess); }, [setIsVerify, isSuccess]);

  const requestVerify: SubmitHandler<IAuthVerifyRequest> = async ( activationCode ) => {
    mutateVerifyEmail(activationCode);
  };

  useEffect(()=>{
    isSuccess && setOpenPopup(false);
    isSuccess && reset();;
  },[isSuccess, reset, setOpenPopup])

  const onSubmitForm = () => {
    handleSubmit(requestVerify)();
  };

  return (
    <VerifyTemplate
      openPopup={openPopup}
      setOpenPopup={setOpenPopup}
      onSubmitForm={() => onSubmitForm()}
      verifyRegisterForm={verifyRegisterForm}
      isLoading={isLoading}
      isError={isError}
      error={error as AxiosError}
    />
  );
};