import { useEffect, useState } from "react";
import { EmployeeContext } from "./context/employeeContext";
import { useContext } from "react";

export const EmployeeList = () => {
    const { employee } = useContext(EmployeeContext);
    const { handleEmployees } = useContext(EmployeeContext);
    useEffect(()=>{handleEmployees()},[])
    return (
        <div className="list_container">
            {/* On clicking this card anywhere, user goes to user details */}
            {employee.map((elem) => {
                return (
                    <div className="employee_card" key={elem.id} >
                        <img className="employee_image" src={elem.image} />
                        <span className="employee_name">{elem.employee_name}</span>
                        <span className="employee_title">{elem.title}</span>
                    </div>
                )
            })}
        </div>
    );
};