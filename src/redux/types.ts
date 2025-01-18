import { ActionTypes } from "./actionTypes"
export type CounterAction =
  | { type: ActionTypes.INCREMENT } 
  | { type: ActionTypes.DECREMENT } 