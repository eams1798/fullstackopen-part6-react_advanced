import { createContext, useReducer } from "react";
import { notificationReducer, NotificationAction } from "../reducers/notification";

const Context = createContext<[string, React.Dispatch<NotificationAction>]>(['', () => {}]);

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [notification, dispatch] = useReducer(notificationReducer, '')
  return (
    <Context.Provider value={[notification, dispatch]}>
      {children}
    </Context.Provider>
  )
}

export default Context