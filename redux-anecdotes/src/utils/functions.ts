import { IAnecdote } from "../interfaces/states"

export const getId = () => (100000 * Math.random()).toFixed(0)
  
export const asObject = (anecdote: string): IAnecdote => {
  return {
    content: anecdote,
    /* id: getId(), */
    votes: 0
  }
}