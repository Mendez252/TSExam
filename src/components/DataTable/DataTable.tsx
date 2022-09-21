import React, { useState } from "react";
import "./DataTable.css";

type EmployeeProps = {
  id: number;
  name: string;
  last_name: string;
  birthday: number;
};

interface employProps {
  employProps: [];
}

const data = [
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
];

/* const DataTable: React.FC<employProps> = (employ: employProps): JSX.Element => { */
const DataTable: React.FC = (): JSX.Element => {
  return (
    <div className="table_container">
      <div className="table_header">
        <p></p>
        <p>Id</p>
        <p>Name</p>
        <p>Last Name</p>
        <p>Birthday</p>
        <p></p>
      </div>

      <div className="table_header row">
        {data.map((employee) => {
          return (
            <>
              <p></p>
              <p>{employee.id}</p>
              <p>{employee.name}</p>
              <p>{employee.last_name}</p>
              <p>{employee.birthday}</p>
              <p></p>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default DataTable;

//=================================
/* type EmployeeProps = {
  id: number;
  name: string;
  last_name: string;
  birthday: number;
};

type StringProps = {
  letter: string;
};

const DataTable: React.FC<StringProps> = ({ letter }): JSX.Element => {
  console.log(letter);
  return (
    <div className="table_body">
      <div className="table_header">
        <p></p>
        <p>Id</p>
        <p>Name</p>
        <p>Last Name</p>
        <p>Birthday</p>
        <p></p>
      </div>
      <div className="table_rows"></div>
    </div>
  );
};

export default DataTable; */
