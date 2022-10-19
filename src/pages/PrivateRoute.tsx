import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

interface Props extends RouteProps {
  isAuth: boolean;
  component: any;
  path: string;
}

const PrivateRoute: React.FC<Props> = ({
  component: Component,
  isAuth,
  path,
  ...rest
}: Props) => {
  //const { component: Component, isAuth, path, ...rest } = props;
  console.log(isAuth);

  return (
    <Route
      path={path}
      {...rest}
      render={(routeProps) => {
        console.log("from PrivateRoute", isAuth);
        return isAuth ? (
          <Component {...routeProps} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

export default PrivateRoute;
