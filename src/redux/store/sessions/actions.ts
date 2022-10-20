import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
//Interfaces
//------------------------------------
export interface Credentials {
  username: string;
  password: string;
  isLogged: boolean;
}

export interface SetAction {
  type: "SET_TOKEN";
  accessToken: Credentials;
}

export interface SetFetching {
  type: "SET_FETCHING";
  isFetching: boolean;
}

export interface SetPage {
  type: "SET_PAGE";
  page: number;
}

export type Action = SetAction | SetFetching | SetPage;

//Actions
//-------------------------------
export const setToken = (accessToken: Credentials): SetAction => {
  return { type: "SET_TOKEN", accessToken };
};

export const isFetching = (isFetching: boolean): SetFetching => {
  return { type: "SET_FETCHING", isFetching };
};

export const setPage = (): SetPage => {
  return { type: "SET_PAGE", page: 1 };
};

//Actions Creators
//-----------------------------
export const login = (
  username: string,
  password: string,
  isLogged: boolean
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  const credentials = {
    username,
    password,
    isLogged,
  };

  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    return new Promise<void>((resolve) => {
      dispatch(isFetching(true));
      setTimeout(() => {
        dispatch(setToken(credentials));
        setTimeout(() => {
          dispatch(isFetching(false));
          resolve();
        }, 1000);
      }, 1500);
    });
  };
};
