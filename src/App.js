import React, { Component } from "react";
import EmployeeTable from "./components/EmployeeTable";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from './components/employees.json';

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
          {this.state.employees.map(employee => (
            <EmployeeTable
              removeEmployee={this.removeEmployee}
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
