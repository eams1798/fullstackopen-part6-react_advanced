/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react"
import Context from "../components/Context"

export const setNotification = (data: string) => useContext(Context)[1]({
  type: "SET_NOTIFICATION",
  data
})
export const showNotificationIn5Sec = (message: string) => {
  setNotification(message)
  setTimeout(() => {
    setNotification("")
  }, 5000)
}