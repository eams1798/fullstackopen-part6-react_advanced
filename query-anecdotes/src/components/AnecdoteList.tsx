import { useQuery } from "@tanstack/react-query"
import Anecdote from "./Anecdote"
import { getAnecdotes } from "../utils/requests"

const AnecdoteList = () => {

  const result = useQuery({
    queryKey: ["anecdotes"],
    queryFn: getAnecdotes
  })

  console.log(JSON.parse(JSON.stringify(result)))

  if (result.isLoading) {
    return <div>Loading...</div>
  }

  if (result.isError) {
    console.log(result.error)
    return <div>Error: Look at the console</div>
  }

  const anecdotes = result.data

  return (
    <div>
      {anecdotes.map(anecdote =>
        <Anecdote key={anecdote.id} properties={anecdote} />
      )}
    </div>
  )
}

export default AnecdoteList