export interface IUserInfoData {
  profileId: string
  username: string
  email: string
  followers: number
  followees: number
  joinDate: string
  bio: string
  location: string
  website: string
  birthDate: string | null
  avatarUrl: string
  bannerUrl: string | null
}

export type ITweet = {
  profile: IUserInfoData
  creationDate: string
  isBelongs: boolean
} & ITweetContent &
  ITweetWidgets

export type ITweetContent = {
  text?: string
  mediaUrls?: string[]
}

export type ITweetWidgets = {
  id: number
  isLiked: boolean
  isRetweeted: boolean
  likes: number
  replies: number
  replyTo: null | IDataReplyTo
  retweets: number
  retweetTo: IDataRetweetTo | null
  views: number
}

export type IDataTweets = {
  tweets: IDataTweet[]
}

export type IDataReplies = {
  replies: IDataTweet[]
}

export type IDataTweet = {
  id: number
  isLiked: boolean
  isRetweeted: boolean
  isBelongs: boolean
  likes: number
  profile: IUserInfoData
  mediaUrls?: string[]
  creationDate: string
  quoteTo: null
  replies: number
  replyTo: null | IDataReplyTo
  retweetTo: null | IDataRetweetTo
  retweets: number
  text?: string
  views: number
}

export type IDataRetweetTo = {
  creationDate: string
  id: number
  isLiked: boolean
  isRetweeted: boolean
  isBelongs: boolean
  likes: number
  mediaUrls: string[]
  profile: IUserInfoData
  quoteTo: null
  replies: number
  replyTo: null | IDataReplyTo
  retweetTo: null | IDataRetweetTo
  retweets: number
  text: string
  views: number
}

export type IDataReplyTo = {
  creationDate: string
  id: number
  isLiked: boolean
  isRetweeted: boolean
  isBelongs: boolean
  likes: number
  mediaUrls: string[]
  profile: IUserInfoData
  quoteTo: null
  replies: number
  replyTo: null | IDataReplyTo
  retweetTo: null | IDataRetweetTo
  retweets: number
  text: string
  views: number
}

export type IDataReply = {
  replyId: number
  replyIsLiked: boolean
  replyIsRetweeted: boolean
  replyIsBelongs: boolean
  replyLikes: number
  replyProfile: IUserInfoData
  replyReplies: number
  replyReplyTo: null | IDataReplyTo
  replyRetweets: number
  replyRetweetTo: null | IDataRetweetTo
  replyViews: number
  replyTweetText?: string
  replyMediaUrls?: string[]
  replycreationDate: string
} & ITweet
