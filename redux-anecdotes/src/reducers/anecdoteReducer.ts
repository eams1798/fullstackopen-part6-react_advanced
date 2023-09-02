import { IAnecdote } from "../interfaces/states"
import { asObject } from "../utils/functions"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const anecdotesAtStart: string[] = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const initialState = anecdotesAtStart.map(anecdote => asObject(anecdote))

/* const reducer: TAnecdoteReducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'VOTE':
      return (() => {
        const id = action.payload.id
        const anecdoteToChange = state.find(a => a.id === id)
        let newArrState: IAnecdote[]
        
        if (anecdoteToChange) {
          const index = state.indexOf(anecdoteToChange)
          anecdoteToChange.votes++
          newArrState = [
            ...state.slice(0, index),
            anecdoteToChange,
            ...state.slice(index + 1)
          ]
        } else {
          newArrState = state
        }
        return newArrState.sort((a, b) => b.votes - a.votes)
      })()
    case 'NEW_ANECDOTE':
      return [
        ...state,
        asObject(action.payload.content)
      ]
    default:
      return state
  }
}

export default reducer */

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    voteFor(state: IAnecdote[], action: PayloadAction<string>) {
      const id = action.payload
      const anecdoteToChange = state.find(a => a.id === id)

      if (anecdoteToChange) {
        const index = state.indexOf(anecdoteToChange)
        state[index].votes++
      }
    },
    newAnecdote(state: IAnecdote[], action: PayloadAction<string>) {
      state.push(asObject(action.payload))
    }
  }
})

export const { voteFor, newAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer