import { useDispatch } from "react-redux"
import { IAnecdote } from "../interfaces/anecdote"
import { voteFor } from "../reducers/actions"

interface IAnecdoteProps {
  properties: IAnecdote
}

const Anecdote = ({ properties }: IAnecdoteProps) => {
  const dispatch = useDispatch()

  const vote = () => {
    dispatch(voteFor(properties.id))
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