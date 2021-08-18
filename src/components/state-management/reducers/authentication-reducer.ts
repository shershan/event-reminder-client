import { Action } from "../../interfaces/actions/action";
import { Authentication } from "../../interfaces/store/authentication"
import { initAuthentication } from "../store/authentication"

export const AuthenticationReducer = (state: Authentication = initAuthentication, action: Action) => {
  
  return state;
}