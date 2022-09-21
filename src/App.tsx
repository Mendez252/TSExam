import React from "react";
import { Provider } from "react-redux";
import Routes from "./Routes";
import store from "./redux/store";

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Routes />
      </Provider>
    </React.StrictMode>
  );
};

export default App;
