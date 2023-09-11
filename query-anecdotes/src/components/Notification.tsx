import { useContext } from "react"
import Context from "./Context"

const Notification = () => {
  const [notification, ] = useContext(Context)
  const style: React.CSSProperties = {
    display: notification ? 'block' : 'none',
    border: 'solid',
    borderColor: notification.includes('Error') ? 'red' : 'green',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification