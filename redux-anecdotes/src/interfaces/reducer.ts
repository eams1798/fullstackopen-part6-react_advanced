import { AnyAction, Reducer } from "redux";
import { IAnecdote } from "./anecdote";

export type anecdoteReducer = Reducer<IAnecdote[], AnyAction>