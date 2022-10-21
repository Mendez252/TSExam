import { RootState } from "./redux/store";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  RouteProps,
  HashRouter,
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
  return (
    <HashRouter>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <PrivateRoute
          path="/employees"
          isAuth={accessToken.isLogged}
          component={EmployeesPage}
        />
        <PrivateRoute
          path="/upload"
          isAuth={accessToken.isLogged}
          component={UploadPage}
        />
        <Route exact={true} path={"/*"} component={NotFound} />
      </Switch>
    </HashRouter>
  );
};

const mapStateToProps = (states: RootState, ownProps: OwnProps): StateProps => {
  return {
    accessToken: states.session.accessToken,
  };
};

export default connect(mapStateToProps)(Routes);
