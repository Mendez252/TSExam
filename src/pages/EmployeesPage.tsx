import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../components/NavBar/NavBar";
import DataTable from "../components/DataTable/DataTable";

type EmployeeProps = {
  id?: number;
  name?: string;
  last_name?: string;
  birthday?: number;
};

const url: string =
  "https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/carlosmendez";

/* const data = [
  {
    id: 1,
    name: "Aguayo González",
    last_name: "Jaime Francisco",
    birthday: 1587599581347,
  },
  {
    id: 2,
    name: "Chávez Heredia",
    last_name: "Andrea",
    birthday: 1587599581347,
  },
  {
    id: 3,
    name: "Cortés Lagunes",
    last_name: "Ruth Silvana",
    birthday: 1587599581347,
  },
]; */

const EmployeesPage = () => {
  const [employees, setEmployees] = useState<EmployeeProps[]>([]);

  useEffect(() => {
    const request = axios
      .get(`${url}`)
      .then((res) => setEmployees(res.data.data.employees));
  }, []);

  //employees.map((employees: any) => console.log(employees.name));
  const employsProps = {
    employ: employees,
  };

  return (
    <div className="employees_container">
      <NavBar />
      <div>Employees Page</div>
      {/* <DataTable employ={...employsProps} /> */}
      <DataTable />
    </div>
  );
};

export default EmployeesPage;
