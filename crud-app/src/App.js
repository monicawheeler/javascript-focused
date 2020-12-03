import React from 'react';
import { Router } from '@reach/router';
import Employees from './employees/Employees';
import EmployeeForm from './employees/EmployeeForm';
import HeaderBar from './HeaderBar';
import './styles/components/media.css';
import './styles/components/button.css';

const App = props => {

  return (
      <>
        <HeaderBar />
        <Router>
          <Employees path='/' />
          <EmployeeForm path='/add-employee' />
          <EmployeeForm path='/edit-employee' />
        </Router>
      </>
  )
};

export default App;