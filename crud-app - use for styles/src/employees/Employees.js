import React from 'react';
import { Link } from '@reach/router';
import EmployeeData from './EmployeeData';
import EmployeeTable from './EmployeeTable';
import '../styles/layout/page-header.css';

const Employees = () => (
    <main className="global-container">
        <div className="page-header">
            <div className="page-header__inner">
                <h2 className="page-header__title t-display">People</h2>
                <p className="page-header__caption t-caption-small">
                     {EmployeeData.length} employees</p>
            </div>
            <Link className="page-header__action button" to='/add-employee'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" role="presentation"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/></svg>
                <span class="page-header__action-text">Add employee</span>
            </Link>
        </div>
        <EmployeeTable location={{state: {employees: EmployeeData}}} />
    </main>
)

export default Employees;