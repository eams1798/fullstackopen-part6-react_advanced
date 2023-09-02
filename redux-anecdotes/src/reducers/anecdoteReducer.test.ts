// it could be wrong

import { IAnecdote } from '../interfaces/states'
import reducer from './anecdoteReducer'
import deepFreeze from 'deep-freeze'

describe('anecdote reducer', () => {
    beforeEach(() => {
        const initialState: IAnecdote[] = [
            {
                content: 'If it hurts, do it more often',
                votes: 0,
                id: '1'
            }
        ]
        deepFreeze(initialState)
    })

    describe('every change in the state must keep it unmutable', () => {
        test('vote', () => {
            const action = {
                type: 'VOTE',
                payload: {
                    id: '1'
                }
            }
            const newState = reducer(initialState, action)
            expect(newState[0].votes).toBe(0)
        })
    })
})