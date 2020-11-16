import React from "react";
import "./style.css";


function EmployeeTable(props) {
  return (
    <tr key={props.id}>
      <td>{props.name}</td>
      <td>{props.role}</td>
      <td>{props.days_in_space}</td>
      <td>{props.final_mission}</td>
    </tr>
  );
}


export default EmployeeTable;
