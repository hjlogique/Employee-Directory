
//::::::::::::::: EmployeeInfo.js ::::::::::::::::

import React from "react";
import EmployeeInfo from "./EmployeeInfo";

function EmployeesList({ employeesData }) {
    return (
        employeesData.map(employee => (
            <EmployeeInfo key={employee.id}
                image={employee.image}
                name={employee.name}
                title={employee.title}
                dept={employee.department}
                email={employee.email}
                phone={employee.phone} />
        ))
    )
}

export default EmployeesList;