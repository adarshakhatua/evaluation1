import { EmployeeContext } from "./context/employeeContext"
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const { isAuth } = useContext(EmployeeContext);
    if (!isAuth) {
        return <Navigate to="/login"/>
    }
    return (
        <div>{children}</div>
    )
}

export { ProtectedRoute };
