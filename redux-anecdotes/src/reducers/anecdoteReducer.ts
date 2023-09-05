import { IAnecdote } from "../interfaces/states"
import { PayloadAction, SliceCaseReducers, createSlice } from "@reduxjs/toolkit"
import anecdoteService from "../services/anecdotes"
import { AppThunkDispatch } from "../interfaces/reducer"

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

export const initializeAnecdotes = () => async (dispatch: AppThunkDispatch) => {
  const anecdotes = await anecdoteService.getAll()
  dispatch(setAnecdotes(anecdotes))
}

export const addNewAnecdote = (content: string) => async (dispatch: AppThunkDispatch) => {
  const newAnecdote = await anecdoteService.create(content)
  dispatch(addAnecdote(newAnecdote))
}

export const voteAnecdote = (id: string) => async (dispatch: AppThunkDispatch) => {
  await anecdoteService.vote(id)
  dispatch(voteFor(id))
}

export default anecdoteSlice.reducer