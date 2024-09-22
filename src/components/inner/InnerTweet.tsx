import React, { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { IAddTweetRequest } from '@/services/types';
import { useAddTweetMutation } from '@/query/tweet/addTweet.mutation';
import InnerTemplate from './templates/InnerTemplate';

interface IInnerTweet {
  avatarUrl: string;
  avatarAlt: string;
}

export default function InnerTweet({ avatarUrl, avatarAlt }: IInnerTweet) {
  const { control, register, handleSubmit, reset } = useForm<IAddTweetRequest>();
  const { mutateAsync, isSuccess } = useAddTweetMutation();

  const onSubmit = async (requestData: IAddTweetRequest) => {
    await mutateAsync(requestData);
  };

  useEffect(()=>{ reset() },[isSuccess, reset])

  return (
    <InnerTemplate
      control={control}
      avatarUrl={avatarUrl}
      avatarAlt={avatarAlt}
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
    />
  );
};