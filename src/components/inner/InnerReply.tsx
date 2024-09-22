import React, { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { IAddTweetRequest } from '@/services/types';
import { useAddReplyMutation } from '@/query/reply/addReply.mutation';
import InnerTemplate from './templates/InnerTemplate';

interface IInnerReply {
  replyToId: number;
  onSubmitReply: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function InnerReply({ replyToId, onSubmitReply }: IInnerReply) {
  const { control, register, handleSubmit, reset } = useForm<IAddTweetRequest>();
  const { mutateAsync, isSuccess } = useAddReplyMutation();

  const onSubmit = (requestData: IAddTweetRequest) => {
    mutateAsync({ requestData, replyToId });
    onSubmitReply(false)
  };

  useEffect(()=>{ reset() },[isSuccess, reset])

  return (
    <InnerTemplate
      control={control}
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
    />
  );
};