import { Reducer } from "react";

export type NotificationAction =
  | { type: "SET_NOTIFICATION"; data: string }
  | { type: "REMOVE_NOTIFICATION" };

export const notificationReducer: Reducer<string, NotificationAction> = (state, action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      return action.data;
    case "REMOVE_NOTIFICATION":
      return "";
    default:
      return state;
  }
};
