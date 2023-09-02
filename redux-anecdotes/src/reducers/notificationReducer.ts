import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
    name: 'notification',
    initialState: '',
    reducers: {
        setNotification(_state_: string, action: PayloadAction<string>) {
            return action.payload
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        clearNotification(_state_: string/* , _a_: PayloadAction<string> */) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            return ''
        }
    }
})

export const { setNotification, clearNotification } = notificationSlice.actions
export default notificationSlice.reducer