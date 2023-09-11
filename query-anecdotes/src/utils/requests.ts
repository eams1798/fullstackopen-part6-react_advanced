import axios, { AxiosError } from "axios"
import { IAnecdote } from "../interfaces/states"

const baseUrl = "http://localhost:3001"

export const getAnecdotes = async (): Promise<IAnecdote[]> => {
  try {
    const response = await axios.get(`${baseUrl}/anecdotes`)
    return response.data
  } catch (error) {
    throw new AxiosError('Problem fetching anecdotes')
  }
}

export const addAnecdote = async (newAnecdote: IAnecdote): Promise<IAnecdote> => {
  try {
    const response = await axios.post(`${baseUrl}/anecdotes`, newAnecdote)
    return response.data
  } catch (error) {
    throw new AxiosError('Problem adding anecdote')
  }
}

export const updateAnecdote = async (updatedAnecdote: IAnecdote): Promise<IAnecdote> => {
  try {
    const response = await axios.put(`${baseUrl}/anecdotes/${updatedAnecdote.id}`, updatedAnecdote)
    return response.data
  } catch (error) {
    throw new AxiosError('Problem updating anecdote')
  }
}
