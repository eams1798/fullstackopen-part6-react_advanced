import { useDispatch, useSelector } from "react-redux"
import { combinedState } from "../interfaces/states"
import { clearNotification } from "../reducers/notificationReducer"
import { useEffect } from "react"

const Notification = () => {
  const notification = useSelector<combinedState, string>((state) => state.notification)
  const style: React.CSSProperties = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    display: notification ? 'block' : 'none'
  }
  const dispatch = useDispatch()
  
  useEffect(() => {
    if (notification) {
      setTimeout(() => {
        dispatch(clearNotification())
      }, 5000)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notification])

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification