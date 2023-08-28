import { useSelector } from "react-redux"
import { IAnecdote } from "../interfaces/anecdote"
import Anecdote from "./Anecdote"

const AnecdoteList = () => {
  const anecdotes = useSelector<IAnecdote[], IAnecdote[]>(state => state
    .sort((a, b) => b.votes - a.votes))

  return (
    <div>
      {anecdotes.map(anecdote =>
        <Anecdote key={anecdote.id} properties={anecdote} />
      )}
    </div>
  )
}

export default AnecdoteList