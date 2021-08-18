import { combineReducers } from "redux";
import { RootStore } from "../../interfaces/store/root-store";
import { AuthenticationReducer } from "./authentication-reducer";

export const reducers = combineReducers<RootStore>({
  authentication: AuthenticationReducer
});