import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import DataTable from "../components/DataTable/DataTable";
import Pagination from "../components/Pagination/Pagination";
import Form from "../components/Form/Form";
import "./style/EmployeesPage.css";
import Button from "../components/Button/Button";

const url: string =
  "https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/carlosmendez";

/* interface Props {
  isAuth: boolean;
} */

const EmployeesPage = () => {
  const history = useHistory();

  const [employees, setEmployees] = useState<any[]>([]);
  const [employeesCopy, setEmployeesCopy] = useState<any[]>([]);

  const [currentPage, setCurrentPage] = useState<number>(1);

  //---Pagination---
  const [employeesPerPage] = useState<number>(10);
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;

  var currentEmployee = employees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  const pagination = (pageNumber: number) => setCurrentPage(pageNumber);

  const searchEmployee = (name: string) => {
    if (name === "") {
      setEmployees(employeesCopy);
      return;
    } else {
      console.log(name);
      setCurrentPage(1);
      const result = employeesCopy.filter((e) => {
        return e.last_name.toLowerCase() === name.toLowerCase();
      });
      if (result) {
        setEmployees(result);
      }
    }
  };

  const reload = (): any => {
    setEmployees(employees);
  };

  useEffect((): any => {
    const request = axios.get(`${url}`).then((res) => {
      setEmployees(res.data.data.employees);
      setEmployeesCopy(res.data.data.employees);
    });
  }, []);

  return (
    <div className="employees_container">
      <NavBar searching={searchEmployee} />
      <Button title="Upload Pic" onClick={() => history.push("/upload")} />
      <Form refresh={reload} />
      <DataTable employeesArray={currentEmployee} />

      <Pagination
        employeesPerPage={employeesPerPage}
        allEmployees={employees.length}
        pagination={pagination}
      />
    </div>
  );
};

export default EmployeesPage;
