import React, { Component } from "react";
import TableHeader from "./components/TableHeader"
import EmployeeTable from "./components/EmployeeTable";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from './components/employees.json';
import './index.css';

class App extends Component {
  state = {
    employees
  };

  removeEmployee = id => {
    const employees = this.state.employees.filter(employee => employee.id !== id);
    this.setState({ employees });
  };

  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        <table>
          <TableHeader/>
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
