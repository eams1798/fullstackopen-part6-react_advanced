import { useDispatch } from "react-redux"
import { IAnecdote } from "../interfaces/states"
import { voteFor } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"

interface IAnecdoteProps {
  properties: IAnecdote
}

const Anecdote = ({ properties }: IAnecdoteProps) => {
  const dispatch = useDispatch()

  const vote = () => {
    dispatch(voteFor(properties.id))
    setNotification(`You voted: ${properties.content}. You are the (${properties.votes})th voter.`)
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