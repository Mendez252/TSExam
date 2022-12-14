import React, { useState } from "react";
import { RootState } from "../../redux/store/";
import { connect } from "react-redux";
import { login } from "../../redux/store/sessions/actions";
import { AccessToken } from "../../redux/store/sessions/reducer";
import { ThunkDispatch } from "redux-thunk";
import { Redirect } from "react-router-dom";
import Button from "../Button/Button";
import "./LoginForm.css";

//TYPES & INTERFACES
//---------------------------------------------------------------------->
type Styles = {
  color: string;
  borderBottom?: string;
};

type User = {
  email: string;
  password: string;
  isLogged: boolean;
};

interface State {}

interface OwnProps {}

interface DispatchProps {
  login: (username: string, password: string, isLogged: boolean) => void;
}

interface StateProps {
  accessToken: AccessToken;
}

type Props = StateProps & DispatchProps & OwnProps;
//---------------------------------------------------------------------->

const LoginForm = ({ accessToken, login }: Props) => {
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
    isLogged: false,
  });
  const [turnOn, setTurnOn] = useState<Styles>({ color: "black" });
  const [turnOff, setTurnOff] = useState<Styles>({ color: "gray" });
  const [active, setActive] = useState<boolean>(false);

  const token = accessToken;

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

  if (accessToken?.accessToken) {
    return <Redirect to="/employees" />;
  } else {
    alert("please login");
    return <Redirect to="/login" />;
  }

  return (
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
        onClick={() => login("test@test", "test", true)}
      />
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
    login: async (username, password, isLogged) => {
      await dispatch(login(username, password, isLogged));
      console.log("Login completed [UI]");
    },
  };
};

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
