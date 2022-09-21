import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

interface Props extends RouteProps {
  isAuth: boolean;
  component: any;
}

const PrivateRoute: React.FC<Props> = (props: Props) => {
  const { component: Component, isAuth, ...rest } = props;
  console.log("private", isAuth);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isAuth ? <Component {...routeProps} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
