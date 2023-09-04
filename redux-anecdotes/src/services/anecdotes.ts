import axios from 'axios'
import { IAnecdote } from '../interfaces/states'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async (): Promise<IAnecdote[]> => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (content: string): Promise<IAnecdote> => {
  const object = { content, votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const vote = async (id: string): Promise<IAnecdote> => {
  const { data } = await axios.get(`${baseUrl}/${id}`);
  const modifiedObject = { ...data, votes: data.votes + 1 };
  
  await axios.put(`${baseUrl}/${id}`, modifiedObject);

  return modifiedObject;
}

export default {
  getAll,
  create,
  vote
}