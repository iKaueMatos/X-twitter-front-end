import api from '../../api/index'
import { TWEETS_DELETE, TWEETS_POST } from '../config'
import { IAddTweetResponse } from '../types'

export const deleteTweet = async (id: number) => {
  const response = await api.delete(`${TWEETS_DELETE}/${id}`)
  return response
}

export const addTweet = async (data: FormData) => {
  const response = await api.post<IAddTweetResponse>(TWEETS_POST, data)
  return response
}
