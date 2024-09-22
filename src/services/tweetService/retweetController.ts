import api from '../../api/index'
import {
  RETWEET_DELETE,
  RETWEET_GET,
  RETWEET_LIST_GET,
  RETWEET_POST,
} from '../config'

export const addRetweet = async (tweetId: number) => {
  const response = await api.post(`${RETWEET_POST}/${tweetId}`)
  return response
}

export const getRetweet = async () => {
  const response = await api.get(RETWEET_GET)
  return response
}

/* getRetweetList еще не внедрено, TODO изменения от бэкенда */
export const getRetweetList = async () => {
  const response = await api.get(RETWEET_LIST_GET)
  return response
}

export const deleteRetweet = async (retweetData: number) => {
  const response = await api.delete(`${RETWEET_DELETE}/${retweetData}`)
  return response
}
