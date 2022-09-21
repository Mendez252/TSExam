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

interface OwnProps {}

interface StateProps {
  accessToken: AccessToken;
}

type Props = StateProps & OwnProps;

const Routes = ({ accessToken }: Props) => {
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    setAuth(accessToken?.accessToken ? true : false);
    console.log(isAuth);
  }, [accessToken?.accessToken]);

  console.log(isAuth);

  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route exact={true} path={"/employees"} component={EmployeesPage} />
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
