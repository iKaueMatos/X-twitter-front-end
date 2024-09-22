import api from '@/api'
import { REPLIES_DELETE, REPLIES_GET, REPLIES_POST } from '../config'
import { IDataReplyTo } from '@/components/tweets/types'

export const getReply = async (parentTweetId: number) => {
  const response = await api.get<IDataReplyTo>(`${REPLIES_GET}/${parentTweetId}`)
  return response
}

export const addReply = async (formData: FormData, replyToId: number) => {
  const response = await api.post(`${REPLIES_POST}/${replyToId}`, formData)
  return response
}

export const deleteReply = async (replyId: number) => {
  const response = await api.delete(`${REPLIES_DELETE}/${replyId}`)
  return response
}