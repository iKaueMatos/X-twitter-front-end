import api from '@/api'
import { FOLLOW_DELETE, FOLLOW_POST } from '../config'

export const toFollow = async (followeeId: string) => {
  const response = await api.post(FOLLOW_POST + '/' + followeeId)
  return response
}

export const toDeleteFollow = async (followeeId: string) => {
  const response = await api.delete(FOLLOW_DELETE + '/' + followeeId)
  return response
}
