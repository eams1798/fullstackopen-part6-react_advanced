import { useDispatch } from "react-redux"
import { newAnecdote } from "../reducers/actions"

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const createAnecdote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(newAnecdote(e.currentTarget.content.value))
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