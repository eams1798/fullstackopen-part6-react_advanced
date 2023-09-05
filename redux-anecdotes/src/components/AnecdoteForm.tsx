import { useDispatch } from "react-redux"
import { showNotification } from "../reducers/notificationReducer"
import { AppThunkDispatch } from "../interfaces/reducer"
import { addNewAnecdote } from "../reducers/anecdoteReducer"

const AnecdoteForm = () => {
  const dispatch = useDispatch<AppThunkDispatch>()

  const createAnecdote = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const content = e.currentTarget.content.value
    e.currentTarget.reset()
    dispatch(addNewAnecdote(content))
    dispatch(showNotification(`New anecdote created: ${content}`, 5))
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