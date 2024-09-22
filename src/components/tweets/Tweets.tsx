import React, { FC } from 'react';
import { Box, Container } from '@mui/material';
import UnderLine from '@/common/UnderLine';
import { IDataTweet, IDataTweets } from './types';
import Tweet from './Tweet';
import Retweet from './Retweet';
import Reply from './Reply';

export default function Tweets({ tweets }: IDataTweets, index: number) {
  console.log(tweets);
  return (
    <Container disableGutters>
      {tweets.map((tweet: IDataTweet) => (
        <Box key={tweet.id}>
          {tweet.retweetTo && (
            <Retweet
              id={tweet.retweetTo.id}
              isLiked={tweet.retweetTo.isLiked}
              isRetweeted={tweet.retweetTo.isRetweeted}
              avatarUrl={tweet.retweetTo.profile.avatarUrl}
              avatarAlt={tweet.retweetTo.profile.avatarUrl}
              username={tweet.retweetTo.profile.username}
              userTag={tweet.retweetTo.profile.username}
              userPassedTime={Number(new Date(tweet.retweetTo.creationDate))}
              tweetText={tweet.retweetTo.text}
              tweetImg={
                tweet.retweetTo.mediaUrls && tweet.retweetTo.mediaUrls[0]
              }
              tweetAlt={
                tweet.retweetTo.mediaUrls && tweet.retweetTo.mediaUrls[0]
              }
              likes={tweet.retweetTo.likes}
              replies={tweet.retweetTo.replies}
              replyTo={tweet.retweetTo.replyTo}
              retweets={tweet.retweetTo.retweets}
              retweetTo={tweet.retweetTo.retweetTo}
              views={tweet.retweetTo.views}
            />
          )}
          {tweet.replyTo && (
            <Reply
              id={tweet.id}
              isLiked={tweet.isLiked}
              isRetweeted={tweet.isRetweeted}
              username={tweet.profile.username}
              userTag={tweet.profile.username}
              userPassedTime={Number(new Date(tweet.creationDate))}
              avatarUrl={tweet.profile.avatarUrl}
              avatarAlt={tweet.profile.avatarUrl}
              tweetText={tweet.text}
              tweetImg={tweet.mediaUrls && tweet.mediaUrls[0]}
              tweetAlt={tweet.mediaUrls && tweet.mediaUrls[0]}
              likes={tweet.likes}
              replies={tweet.replies}
              replyTo={tweet.replyTo}
              retweets={tweet.retweets}
              retweetTo={tweet.retweetTo}
              views={tweet.views}
              replyId={tweet.replyTo.id}
              replyIsLiked={tweet.replyTo.isLiked}
              replyIsRetweeted={tweet.replyTo.isRetweeted}
              replyUsername={tweet.replyTo.profile.username}
              replyUserTag={tweet.replyTo.profile.username}
              replyUserPassedTime={Number(new Date(tweet.replyTo.creationDate))}
              replyAvatarUrl={tweet.replyTo.profile.avatarUrl}
              replyAvatarAlt={tweet.replyTo.profile.avatarUrl}
              replyTweetText={tweet.replyTo.text}
              replyTweetImg={
                tweet.replyTo.mediaUrls && tweet.replyTo.mediaUrls[0]
              }
              replyTweetAlt={
                tweet.replyTo.mediaUrls && tweet.replyTo.mediaUrls[0]
              }
              replyLikes={tweet.replyTo.likes}
              replyReplies={tweet.replyTo.replies}
              replyReplyTo={tweet.replyTo.replyTo}
              replyRetweets={tweet.replyTo.retweets}
              replyRetweetTo={tweet.replyTo.retweetTo}
              replyViews={tweet.replyTo.views}
            />
          )}
          {!tweet.retweetTo && !tweet.replyTo && (
            <Tweet
              id={tweet.id}
              isLiked={tweet.isLiked}
              isRetweeted={tweet.isRetweeted}
              avatarUrl={tweet.profile.avatarUrl}
              avatarAlt={tweet.profile.avatarUrl}
              username={tweet.profile.username}
              userTag={tweet.profile.username}
              userPassedTime={Number(new Date(tweet.creationDate))}
              tweetText={tweet.text}
              tweetImg={tweet.mediaUrls && tweet.mediaUrls[0]}
              tweetAlt={tweet.mediaUrls && tweet.mediaUrls[0]}
              likes={tweet.likes}
              replies={tweet.replies}
              replyTo={tweet.replyTo}
              retweets={tweet.retweets}
              retweetTo={tweet.retweetTo}
              views={tweet.views}
            />
          )}
          {tweets && tweets.length - 1 != index && <UnderLine />}
        </Box>
      ))}
    </Container>
  );
};