import { IAnecdote } from "../interfaces/states"
import { Dispatch, PayloadAction, SliceCaseReducers, createSlice } from "@reduxjs/toolkit"
import anecdoteService from "../services/anecdotes"

const anecdoteSlice = createSlice<IAnecdote[], SliceCaseReducers<IAnecdote[]>>({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    voteFor(state: IAnecdote[], action: PayloadAction<string>) {
      const id = action.payload
      const anecdoteToChange = state.find(a => a.id === id)

      if (anecdoteToChange) {
        const index = state.indexOf(anecdoteToChange)
        state[index].votes++
      }
    },
    addAnecdote(state: IAnecdote[], action: PayloadAction<IAnecdote>) {
      state.push(action.payload)
    },
    setAnecdotes(_state_: IAnecdote[], action: PayloadAction<IAnecdote[]>) {
      return action.payload
    }
  }
})

export const { voteFor, addAnecdote, setAnecdotes } = anecdoteSlice.actions

// thunks
export const initializeAnecdotes = () => async (dispatch: Dispatch) => {
  const anecdotes = await anecdoteService.getAll()
  dispatch(setAnecdotes(anecdotes))
}

export const createAnecdote = (content: string) => async (dispatch: Dispatch) => {
  const newAnecdote = await anecdoteService.create(content)
  dispatch(addAnecdote(newAnecdote))
}

export const voteAnecdote = (id: string) => async (dispatch: Dispatch) => {
  await anecdoteService.vote(id)
  dispatch(voteFor(id))
}

export default anecdoteSlice.reducer