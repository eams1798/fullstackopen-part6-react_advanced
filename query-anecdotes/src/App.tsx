import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import { ContextProvider } from './components/Context'
import Notification from './components/Notification'

const App = () => {

  return (
    <ContextProvider>
      <div>
        <h3>Anecdote app</h3>
      
        <Notification />
        <AnecdoteForm />
      
        <AnecdoteList />
      </div>
    </ContextProvider>
  )
}

export default App