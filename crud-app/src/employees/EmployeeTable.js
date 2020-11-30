import React from 'react';

const EmployeeTable = props => (
  <>
    <table>
      <thead>
        <tr>
          <th>Employee</th>
          <th>Job Title</th>
          <th>Country</th>
          <th>Salary</th>
          <th className="sr-only">Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.length > 0 ? (
          props.employees.map((employee) => (
            <tr key={employee.id}>
              <td>
                {employee.name}
                {employee.birthdate}
              </td>
              <td>{employee.role}</td>
              <td>{employee.country}</td>
              {/* TODO: the way money is handled should be localized */}
              <td>${employee.salary} per year</td>
              <td>
                <button
                  onClick={() => {
                    props.editRow(employee)
                  }}
                  className="button muted-button"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No employees</td>
          </tr>
        )}
      </tbody>
    </table>
  </>
);

export default EmployeeTable;