import React from 'react';
import EmployeeData from './EmployeeData'
import EmployeeTable from './EmployeeTable';

const Employees = () => (
    <main className="global-container">
        <h2>People</h2>
        <p>{EmployeeData.length} employees</p>
        <EmployeeTable employees={EmployeeData} />
    </main>
)

export default Employees;