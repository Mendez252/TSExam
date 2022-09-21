import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import EmployeesPage from "../../pages/EmployeesPage";

interface Props extends RouteProps {
  isAuth: boolean;
}

const ProtectedRoute = ({ isAuth, ...routeProps }: Props) => {
  console.log(isAuth);
  if (isAuth === true) {
    <Route path="/employees" component={() => <EmployeesPage />} />;
  }
  return <Redirect to="/login" />;
};

export default ProtectedRoute;
