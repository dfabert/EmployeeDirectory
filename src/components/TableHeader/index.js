import React from "react";
import "./style.css";

function TableHeader(props) {
  return (
    <tr class = 'tableheading'>
      <td>Name</td>
      <td>Role</td>
      <td>Hours in Space</td>
      <td>Last Mission</td>
    </tr>
  );
}

export default TableHeader;
