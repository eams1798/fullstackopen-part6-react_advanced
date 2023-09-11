import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addAnecdote } from "../utils/requests"
import { useContext } from "react"
import Context from "./Context"

const AnecdoteForm = () => {

  const queryClient = useQueryClient()
  const addAnecdoteMutation = useMutation(addAnecdote, {
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

  const onCreate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const content = event.currentTarget.anecdote.value
    if (content.length < 5) {
      showNotificationIn5Sec(`Error: Content must be at least 5 characters long`)
      return
    }
    event.currentTarget.reset()
    addAnecdoteMutation.mutate({ content, votes: 0 })
    showNotificationIn5Sec(`New anecdote added: ${content}`)
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm