import { useSelector } from "react-redux"
import { combinedState } from "../interfaces/states"

const Notification = () => {
  const notification = useSelector<combinedState, string>((state) => state.notification)
  const style: React.CSSProperties = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    display: notification ? 'block' : 'none'
  }

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification