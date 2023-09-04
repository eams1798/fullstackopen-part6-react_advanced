import { useDispatch } from "react-redux"
import { addAnecdote } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"
import anecdoteService from "../services/anecdotes"

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const createAnecdote = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const content = e.currentTarget.content.value
    e.currentTarget.reset()
    const newAnecdote = await anecdoteService.create(content)
    dispatch(addAnecdote(newAnecdote))
    dispatch(setNotification(`New anecdote created: ${content}`))
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