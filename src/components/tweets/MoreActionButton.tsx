import React, { FC } from 'react';
import MoreActionButtonTemplate from './templates/MoreActionButtonTemplate';
import { useDeleteTweetMutation } from '@/query/tweet/delete.mutation';
import { useDeleteReplyMutation } from '@/query/reply/deleteReply.mutation';
import { useDeleteRetweetMutation } from '@/query/retweet/deleteRetweet.mutation';

interface IMoreActionButton {
  id: number;
  type: 'tweet' | 'retweet' | 'reply'
}

export default function MoreActionButton({ id, type }: IMoreActionButton) {
  const { mutateAsync: mutateDeleteTweet } = useDeleteTweetMutation();
  const { mutateAsync: mutateDeleteReply } = useDeleteReplyMutation()
  const { mutateAsync: mutateRetweetReply } = useDeleteRetweetMutation()

  const onDelete = async () => {
    type === 'tweet' && await mutateDeleteTweet(id);
    type === 'reply' && await mutateDeleteReply(id);
    type === 'retweet' && await mutateRetweetReply(id);
  };

  return <MoreActionButtonTemplate onDelete={onDelete} />;
};