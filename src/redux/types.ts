import { ActionTypes } from "./actionTypes"
import store from "./store"
export type CounterAction =
  | { type: ActionTypes.INCREMENT } 
  | { type: ActionTypes.DECREMENT } 


export type RootState = ReturnType<typeof store.getState>