import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

export interface SetAction {
  type: "SET_TOKEN";
  accessToken: string;
}

export interface SetFetching {
  type: "SET_FETCHING";
  isFetching: boolean;
}

export type Action = SetAction | SetFetching;
//-----------------------------
export const setToken = (accessToken: string): SetAction => {
  return { type: "SET_TOKEN", accessToken };
};

export const isFetching = (isFetching: boolean): SetFetching => {
  return { type: "SET_FETCHING", isFetching };
};

export const login = (
  username: string,
  password: string
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    return new Promise<void>((resolve) => {
      dispatch(isFetching(true));
      setTimeout(() => {
        dispatch(setToken("token_valid"));
        setTimeout(() => {
          dispatch(isFetching(false));
          resolve();
        }, 1000);
      }, 3000);
    });
  };
};
