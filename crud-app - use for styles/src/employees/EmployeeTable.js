import React from 'react';
import { Link } from '@reach/router';
import '../styles/components/table.css';

const EmployeeTable = props => { 
  const employees = props.location.state.employees;
  console.log(employees);
  return (
  <>
  {/* See README.md -> Accessibility for note about semantic HTML in the table below  */}
    <div
      className="table" 
      role="table"
      aria-label="Employees"
      aria-describedby="Employees_table_desc">
      <div class="sr-only" id="Employees_table_desc">
        List of employees which allows you to edit and review their information
      </div>
      <div className="table__thead" role="rowgroup">
        <div className="table__grid-row" role="row">
          <span className="table__col-heading t-column-heading" role="columnheader">Employee</span>
          <span className="table__col-heading t-column-heading" role="columnheader">Job Title</span>
          <span className="table__col-heading t-column-heading" role="columnheader">Country</span>
          <span className="table__col-heading t-column-heading" role="columnheader">Salary</span>
        </div>
      </div>
      
      <div className="table__tbody" role="rowgroup">
      {employees.length > 0 ? (
          employees.map((employee) => (
            <div key={employee.id} className="table__data-row table__grid-row" role="row">
              <span role="cell">
                <h2 className="table__row-heading t-row-heading">{employee.name}</h2>
                <p className="t-caption">{employee.birthdate}</p>
              </span>
              <span className="t-body" role="cell">{employee.role}</span>
              <span className="t-body" role="cell">{employee.country}</span>
              {/* TODO: the way money is handled should be localized */}
              <span className="t-body" role="cell">{employee.salary} USD <span className="t-caption-small">per year</span></span>
              <span role="cell">
                {/* TODO - get button functioning */}
                {/* TODO - change route here and use employee */}
                {/* if exists, edit, if doesn't exist add */}
                {/* <button
                  onClick={() => {
                    // props.editRow(employee)
                  }}
                  className="button muted-button"
                >
                  Edit
                </button> */}
                <Link
                  className="button"
                  to="/edit-employee"
                  state={{editing: true, currentEmployee: employee.id, employees}}>
                  Edit
                </Link>
              {/* <Link to='/edit-employee/:id'><button>Edit</button></Link> */}
              </span>
            </div>
          ))
        ) : (
          <span role="row">
            <span colSpan={3} role="cell">No employees</span>
          </span>
        )}
      </div>
    </div>
  </>
)};

export default EmployeeTable;
