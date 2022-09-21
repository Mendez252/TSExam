import React from "react";
import "./Pagination.css";

const Pagination = ({ employeesPerPage, allEmployees, pagination }: any) => {
  /*   console.log("Pagination", pagination);
  console.log("employeesPerPage", employeesPerPage);
  console.log("allEmployees", allEmployees); */

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allEmployees / employeesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="paginado">
        {pageNumbers &&
          pageNumbers.map((number, id) => (
            <li className="number" key={id}>
              <a href="#/" onClick={() => pagination(number)}>
                {number}
              </a>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Pagination;
