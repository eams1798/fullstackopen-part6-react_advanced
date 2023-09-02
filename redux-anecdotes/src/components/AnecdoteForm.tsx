import { useDispatch } from "react-redux"
import { newAnecdote } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const createAnecdote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const content = e.currentTarget.content.value
    dispatch(newAnecdote(content))
    dispatch(setNotification(`New anecdote created: ${content}`))
    e.currentTarget.reset()
  }
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={createAnecdote}>
        <div>
          <label htmlFor="content">Content</label>
          <input id="content" name="content" type="text"/>
        </div>
        <button>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm