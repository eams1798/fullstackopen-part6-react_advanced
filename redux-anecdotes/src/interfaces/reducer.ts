import { AnyAction, Reducer } from "redux";
import { IAnecdote } from "./states";

export type TAnecdoteReducer = Reducer<IAnecdote[], AnyAction>
export type TFilterReducer = Reducer<string, AnyAction>