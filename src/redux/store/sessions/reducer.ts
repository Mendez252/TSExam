import { combineReducers } from "redux";
import { Action } from "./actions";

export interface Credentials {
  username: string;
  password: string;
  isLogged: boolean;
}

export interface AccessToken {
  isFetching: boolean;
  accessToken?: Credentials;
  isLogged: boolean;
}

export interface State {
  accessToken: AccessToken;
}
//--------------------->

const accessToken = (
  state: AccessToken = {
    isFetching: false,
    isLogged: false,
    accessToken,
  },
  action: Action
): AccessToken => {
  switch (action.type) {
    case "SET_TOKEN":
      const { username, password } = action.accessToken;

      return { ...state, isLogged: action.accessToken.isLogged };

      break;
    case "SET_FETCHING":
      return { ...state, isFetching: action.isFetching };
      break;
  }
  return state;
};

export default combineReducers<State>({
  accessToken,
});
