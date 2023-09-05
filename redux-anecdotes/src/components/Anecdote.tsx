import { useDispatch } from "react-redux"
import { IAnecdote } from "../interfaces/states"
import { voteAnecdote } from "../reducers/anecdoteReducer"
import { showNotification } from "../reducers/notificationReducer"
import { AppThunkDispatch } from "../interfaces/reducer"

interface IAnecdoteProps {
  properties: IAnecdote
}

const Anecdote = ({ properties }: IAnecdoteProps) => {
  const dispatch = useDispatch<AppThunkDispatch>()

  const vote = () => {
    dispatch(voteAnecdote(properties.id!))
    dispatch(showNotification(`You voted: ${properties.content}.`, 5))
  }

  return (
    <div>
      <div>
        {properties.content}
      </div>
      <div>
        Has {properties.votes} votes
        <button onClick={vote}>Vote</button>
      </div>
    </div>
  )
}

export default Anecdote