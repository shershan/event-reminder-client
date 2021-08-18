import { Action } from "redux";

export interface ActionT<T> extends Action {
  payload?: T
}