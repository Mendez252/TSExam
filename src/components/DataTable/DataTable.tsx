import React, { useState, useEffect } from "react";
import "./DataTable.css";

type EmployeeProps = {
  id: number;
  name: string;
  last_name: string;
  birthday: number;
};

interface employeeProps {
  employeesArray: EmployeeProps[];
}

const DataTable: React.FC<employeeProps> = (
  props: employeeProps
): JSX.Element => {
  const [data, setData] = useState<any[]>([...props.employeesArray]);

  useEffect(() => {
    setData(props.employeesArray);
  }, [props.employeesArray]);

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
        {data.map((employee: any) => {
          return (
            <>
              <p></p>
              <p>{employee.id}</p>
              <p>{employee.last_name}</p>
              <p>{employee.name}</p>
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
