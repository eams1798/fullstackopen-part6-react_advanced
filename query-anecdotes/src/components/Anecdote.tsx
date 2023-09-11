import { useMutation, useQueryClient } from "@tanstack/react-query"
import { IAnecdote } from "../interfaces/states"
import { updateAnecdote } from "../utils/requests"
import { useContext } from "react"
import Context from "./Context"

interface IAnecdoteProps {
  properties: IAnecdote
}

const Anecdote = ({ properties }: IAnecdoteProps) => {

  const queryClient = useQueryClient()

  const updateAnecdoteMutation = useMutation(updateAnecdote, {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["anecdotes"]
      })
    }, onError: (error) => {
      showNotificationIn5Sec(`Error: ${error}`)
    }
  })

  const [, dispatch] = useContext(Context)
  const setNotification = (data: string) => dispatch({ type: "SET_NOTIFICATION", data })

  const showNotificationIn5Sec = (message: string) => {
    setNotification(message)
    setTimeout(() => {
      setNotification("")
    }, 5000)
  }

  const handleVote = (properties: IAnecdote) => {
    updateAnecdoteMutation.mutate({ ...properties, votes: properties.votes + 1 })
    showNotificationIn5Sec(`You voted: ${properties.content}`)
  }

  return (
    <div>
      <div>
        {properties.content}
      </div>
      <div>
        Has {properties.votes} votes
        <button onClick={() => handleVote(properties)}>Vote</button>
      </div>
    </div>
  )
}

export default Anecdote