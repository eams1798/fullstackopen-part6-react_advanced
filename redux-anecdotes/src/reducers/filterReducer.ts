import { PayloadAction, createSlice } from "@reduxjs/toolkit"
/* import { TFilterReducer } from "../interfaces/reducer" */
/* const filterReducer: TFilterReducer = (state = '', action) => {
    console.log('state now: ', state)
    console.log('action', action)

    switch (action.type) {
        case 'SET_FILTER':
            return action.payload
        default:
            return state
    }
}

export default filterReducer */

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        setFilter(_state_: string, action: PayloadAction<string>) {
            return action.payload
        }
    }
})

export const { setFilter } = filterSlice.actions
export default filterSlice.reducer