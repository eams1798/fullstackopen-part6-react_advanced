import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { AppThunkDispatch } from "../interfaces/reducer"

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

export const showNotification = (notification: string, timeInSeconds: number) => async (dispatch: AppThunkDispatch) => {
  dispatch(setNotification(notification)) // todo
  setTimeout(() => {
    dispatch(clearNotification())
  }, timeInSeconds * 1000)
}


export default notificationSlice.reducer