import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import EmployeesPage from "./pages/EmployeesPage";
import ProtectedRoute from "./redux/protectedRoutes/protectedRoutes";

const isAuth: boolean = false;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login" component={() => <EmployeesPage />} />
          <ProtectedRoute
            isAuth={isAuth}
            path="/employees"
            component={() => <EmployeesPage />}
          />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>
);
