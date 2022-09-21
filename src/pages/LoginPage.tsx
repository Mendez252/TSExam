import React, { useState } from "react";
import { RootState } from "../redux/store/";
import { connect } from "react-redux";
import { login } from "../redux/store/sessions/actions";
import { AccessToken } from "../redux/store/sessions/reducer";
import { ThunkDispatch } from "redux-thunk";
import { Redirect, RouteProps } from "react-router-dom";
import Button from "./../components/Button/Button";
import "./style/LoginForm.css";
import "./style/LoginPage.css";

type Styles = {
  color: string;
  borderBottom?: string;
};

type User = {
  email: string;
  password: string;
};

interface State {}

interface OwnProps extends RouteProps {}

interface DispatchProps {
  login: (username: string, password: string) => void;
}

interface StateProps {
  accessToken: AccessToken;
}

type Props = StateProps & DispatchProps & OwnProps;

const LoginPage = ({ accessToken, login }: Props) => {
  const [user, setUser] = useState<User>({ email: "", password: "" });
  const [turnOn, setTurnOn] = useState<Styles>({ color: "black" });
  const [turnOff, setTurnOff] = useState<Styles>({ color: "gray" });
  const [active, setActive] = useState<boolean>(false);

  const token = accessToken?.accessToken;

  const onHandleChange = (e: React.FormEvent): void => {
    e.preventDefault();
    if ((e.target as HTMLInputElement).name === "email") {
      setUser({ ...user, email: (e.target as HTMLInputElement).value });
    }

    if ((e.target as HTMLInputElement).name === "password") {
      setUser({ ...user, password: (e.target as HTMLInputElement).value });
    }
  };

  const onHandleClick = (e: React.FormEvent): void => {
    if ((e.target as HTMLInputElement).name === "signin") {
      console.log("signin");
      setTurnOn({ color: "black", borderBottom: "1px solid gray" });
      setTurnOff({ color: "gray" });
      setActive(false);
    }
    if ((e.target as HTMLInputElement).name === "signup") {
      setTurnOff({ color: "black", borderBottom: "1px solid gray" });
      console.log("signup");
      setTurnOn({ color: "gray" });
      setActive(true);
    }
  };

  if (token) {
    return <Redirect to="/employees" />;
  }

  return (
    <div className="main_container">
      <div className="login_container">
        <img
          className="leftSide"
          src="https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2020/04/Types-of-Wall-Texture-sand-swirl.jpg"
          alt="texture"
        />
        <div className="login_title">
          <button
            name="signin"
            style={turnOn}
            onClick={(e: any) => onHandleClick(e)}
          >
            Sign In
          </button>
          <button
            name="signup"
            style={turnOff}
            onClick={(e: any) => onHandleClick(e)}
          >
            Sign Up
          </button>
        </div>
        <input
          className="login_input"
          name="email"
          type="text"
          placeholder="email"
          onChange={onHandleChange}
          onCut={onHandleChange}
          onCopy={onHandleChange}
          onPaste={onHandleChange}
        ></input>
        <input
          name="password"
          className="login_input"
          type="password"
          placeholder="password"
          onChange={onHandleChange}
          onCut={onHandleChange}
          onCopy={onHandleChange}
          onPaste={onHandleChange}
        ></input>
        {active && (
          <input
            className="login_input"
            type="password"
            placeholder="rewrite password"
            onCut={onHandleChange}
            onCopy={onHandleChange}
            onPaste={onHandleChange}
          ></input>
        )}
        <Button
          flag="sucess"
          title={active ? "Sign Up" : "Sign In"}
          onClick={() => login("test", "test")}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (states: RootState, ownProps: OwnProps): StateProps => {
  return {
    accessToken: states.session.accessToken,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>,
  ownProps: OwnProps
): DispatchProps => {
  return {
    login: async (username, password) => {
      await dispatch(login(username, password));
      console.log("Login completed [UI]");
    },
  };
};

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
