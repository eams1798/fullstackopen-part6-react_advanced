import { useSelector } from "react-redux"
import { IAnecdote, combinedState } from "../interfaces/states"
import Anecdote from "./Anecdote"

const AnecdoteList = () => {
  const anecdotes = useSelector<combinedState, IAnecdote[]>(state => {
    const returnedAnecdotes = [...state.anecdotes].sort((a, b) => b.votes - a.votes)

    if (state.filter) {
      return returnedAnecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
    } else {
      return returnedAnecdotes
    }
  })

  return (
    <div>
      {anecdotes.map(anecdote =>
        <Anecdote key={anecdote.id} properties={anecdote} />
      )}
    </div>
  )
}

export default AnecdoteList