import React from "react";
import "./style.css";

function TableHeader(props) {
  return (
      <tr className = 'tableheading'>
        <td><button type="button" onClick={() => props.sortByHeading('name')}>Name</button></td>
        <td><button type="button" onClick={() => props.sortByHeading('role')}>Role</button></td>
        <td><button type="button" onClick={() => props.sortByHeading('days_in_space')}>Days in Space</button></td>
        <td><button type="button" onClick={() => props.sortByHeading('last_mission')}>Last Mission</button></td>
      </tr> 
  );
}

export default TableHeader;
