import React from "react";
import { Provider } from "react-redux";
import Routes from "./Routes";
import store from "./redux/store";

const App = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Routes />
      </Provider>
    </React.Fragment>
  );
};

export default App;
