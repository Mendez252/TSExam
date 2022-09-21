import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import LoginPage from "./pages/LoginPage";
import { setEmployees } from "./redux/reducers/globals";

interface IEmployees {
  name: string;
}
const App: React.FC = () => {
  /* const useAppDispatch: () => AppDispatch = useDispatch; */
  const dispatch = useDispatch();

  /* const { employeesData } = useSelector((state: RootState) => state.employeesData); */
  /* const { employeesData } = useSelector((state) => state.employeesData); */

  return <div></div>;
};

export default App;
