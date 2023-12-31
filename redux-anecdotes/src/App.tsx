import { useEffect } from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'
import { useDispatch } from 'react-redux'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { AppThunkDispatch } from './interfaces/reducer'

const App = () => {
  const dispatch = useDispatch<AppThunkDispatch>()

  useEffect(() => {
    dispatch(initializeAnecdotes()) // Argument of type '(dispatch: Dispatch) => Promise<void>' is not assignable to parameter of type 'AnyAction'.ts(2345)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  , [])
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App