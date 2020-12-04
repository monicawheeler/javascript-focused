import React, { useState } from 'react';
import EmployeeData from './EmployeeData';
import AddEmployeeForm from './forms/AddEmployeeForm';
import EditEmployeeForm from './forms/EditEmployeeForm';

const EmployeeForm = props => {
    console.log(props);

    // Add Employee
    const [employees, setEmployees] = useState(EmployeeData);
    const addEmployee = (employee) => {
        employee.id = employees.length + 1;
        setEmployees([...employees, employee]);
    }

    // Edit Employee
    // const [editing, setEditing] = useState(false);
    // const initialFormState = {
    //     id: null,
    //     name: '',
    //     birthdate: '',
    //     role: '',
    //     country: '',
    //     salary: ''
    // };
    // const [currentEmployee, setCurrentEmployee] = useState(initialFormState);

    // const editRow = (employee) => {
    //     setEditing(true);
    //     setCurrentEmployee(
    //         { 
    //             id: employee.id,
    //             name: employee.name,
    //             birthdate: employee.birthdate,
    //             role: employee.role,
    //             country: employee.country,
    //             salary: employee.salary
    //         }
    //     );
    // }

    const updateEmployee = (id, updatedEmployee) => {
        // setEditing(false);
        setEmployees(employees.map((employee) => (employee.id === id ? updatedEmployee : employee)));
    }

    return (
        <main className="global-container">
            {props.location.state.editing ? (
                <div>
                    <h2>Edit employee</h2>
                    <EditEmployeeForm
                        // setEditing={setEditing}
                        currentEmployee={props.location.state.currentEmployee}
                        updateEmployee={updateEmployee}
                        allEmployees={props.location.state.employees}
                    />
                </div>
                ) : (
                <div>
                    <h2>Add a new employee</h2>
                    <AddEmployeeForm addEmployee={addEmployee} />
                </div>
            )}
        </main>
    )
}

export default EmployeeForm;