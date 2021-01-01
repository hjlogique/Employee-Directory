
//::::::::::::::: EmployeeInfo.js ::::::::::::::::

import React from "react";

function EmployeeInfo({ image, name, title, dept, email, phone }) {
    return (
        <div className="cardStyle md:flex shadow text-gray-300 my-4 py-4 px-10 rounded-md items-center justify-between">
            <img style={{ maxWidth: "70px" }}
                className="rounded-full shadow-md border border-gray-300"
                src={image}
                alt="employee" />
            <p className="font-bold text-md">{name}</p>
            <p>{title}</p>
            <p>{dept}</p>
            <p className="text-blue-500">{email}</p>
            <p>{phone}</p>
        </div>
    )
}

export default EmployeeInfo;