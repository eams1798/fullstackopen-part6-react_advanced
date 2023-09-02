import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
    name: 'notification',
    initialState: '',
    reducers: {
        setNotification(state: string, action: PayloadAction<string>) {
            state = action.payload
        },
        clearNotification(state: string/* , _a_: PayloadAction<string> */) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            state = ''
        }
    }
})

export const { setNotification, clearNotification } = notificationSlice.actions
export default notificationSlice.reducer