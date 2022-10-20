import React, { useEffect, useState } from "react";
import { RootState } from "./redux/store";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  RouteProps,
} from "react-router-dom";
import { AccessToken } from "./redux/store/sessions/reducer";
import LoginPage from "./pages/LoginPage";
import EmployeesPage from "./pages/EmployeesPage";
import PrivateRoute from "./pages/PrivateRoute";
import NotFound from "./pages/NotFound";
import UploadPage from "./pages/UploadPage";

interface OwnProps {}

interface StateProps {
  accessToken: AccessToken;
}

type Props = StateProps & OwnProps;

const Routes = ({ accessToken }: Props) => {
  console.log("accessToken", accessToken);
  console.log("auth from Routes:", accessToken.isLogged);
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <PrivateRoute
          path="/employees"
          isAuth={accessToken.isLogged}
          component={EmployeesPage}
        />
        <Route path="/upload" component={UploadPage} />
        {/* <Route exact={true} path={"/employees"} component={EmployeesPage} /> */}
        <Route exact={true} path={"/*"} component={NotFound} />
      </Switch>
    </Router>
  );
};

const mapStateToProps = (states: RootState, ownProps: OwnProps): StateProps => {
  return {
    accessToken: states.session.accessToken,
  };
};

export default connect(mapStateToProps)(Routes);
