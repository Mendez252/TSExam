import { combineReducers } from "redux";
import { Action } from "./actions";

export interface AccessToken {
  isFetching: boolean;
  accessToken?: string | undefined;
}

export interface State {
  accessToken: AccessToken;
}
//--------------------->

const accessToken = (
  state: AccessToken = { isFetching: false, accessToken: undefined },
  action: Action
): AccessToken => {
  switch (action.type) {
    case "SET_TOKEN":
      console.log({ ...state, accessToken: action.accessToken });
      return { ...state, accessToken: action.accessToken };
    case "SET_FETCHING":
      return { ...state, isFetching: action.isFetching };
  }
  return state;
};

export default combineReducers<State>({
  accessToken,
});
