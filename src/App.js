import React, { Component } from "react";
import TableHeader from "./components/TableHeader"
import EmployeeTable from "./components/EmployeeTable";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from './components/employees.json';
import './index.css';

console.log(employees);

class App extends Component {
  state = {
    employees
  };

  sortByHeading = heading => {
    if(isNaN(employees[0][heading])){
      console.log(employees);
      let employeeSorted = employees.sort((a,b) => {
        if(a[heading] < b[heading]) { return -1; }
        if(a[heading] > b[heading]) { return 1; }
        return 0;
      });


      console.log(employeeSorted);
      this.setState({ employeeSorted });      
    }else{
      let employeeSorted = employees.sort((a, b) => {
        return b[heading] - a[heading]; 
      });
      console.log(employeeSorted);
      this.setState({ employeeSorted });
    }
  }

  filter = filter => {
      console.log('Lets filter by ' + filter);
      let employeeFiltered = employees.filter(employee => employee.role === filter)
      console.log(employeeFiltered);
      this.setState({ employeeFiltered });
  }


  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        <table>
          <TableHeader
            sortByHeading={this.sortByHeading}
          />
            {this.state.employees.map(employee => (
              <EmployeeTable
                id={employee.id}
                name={employee.name}
                role={employee.role}
                days_in_space={employee.days_in_space}
                final_mission={employee.final_mission}
              />
            ))}
        </table>
      </Wrapper>
    );
  }
}

export default App;
