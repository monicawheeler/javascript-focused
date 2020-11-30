import React from 'react';
import { Link, Router } from '@reach/router';
import Employees from './employees/Employees';
import EmployeeForm from './EmployeeForm';
import HeaderBar from './HeaderBar';
import './styles/components/media.css';

const App = props => {

  return (
      <>
        <HeaderBar />
        <Link to='/add-employee'><button>Add Employee</button></Link>
        <Link to='/employees/'>Employee View</Link>
        <Router>
          <EmployeeForm path='/add-employee' />
          <Employees path='/employees' />
        </Router>
      </>
  )
};

export default App;