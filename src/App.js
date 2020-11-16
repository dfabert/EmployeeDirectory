//import logo from './logo.svg';
//import './App.css';

import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
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
        {this.state.employees.map(employee => (
          <EmployeeCard
            removeEmployee={this.removeEmployee}
            id={employee.id}
            key={employee.id}
            name={employee.name}
            occupation={employee.occupation}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
