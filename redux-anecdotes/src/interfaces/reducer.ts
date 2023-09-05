import { AnyAction, Reducer } from "redux";
import { IAnecdote, combinedState } from "./states";
import { ThunkDispatch } from "@reduxjs/toolkit";

export type TAnecdoteReducer = Reducer<IAnecdote[], AnyAction>
export type TFilterReducer = Reducer<string, AnyAction>

export type AppThunkDispatch = ThunkDispatch<combinedState, unknown, AnyAction>