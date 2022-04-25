import { useEffect, useState } from "react";
import { useContext } from "react";
import { EmployeeContext } from "./context/employeeContext";

export const Login = () => {
    //  use reqres to log user in.
    const [user, setUser] = useState({
        "username": "",
        "password":"",
    });
    const handleLogin = (e) => {
        e.preventDefault();
        setUser({
            ...user,
            [e.target.name]:e.target.value
        });
        // console.log(user);
    }
    const { handleToken } = useContext(EmployeeContext);
    //useEffect(() => { handleToken() }, []);
    return (
        <form className="loginform" onSubmit={(e) => { e.preventDefault(); handleToken(user)}}>
            <input
                name="username"
                type="text"
                placeholder="Enter username"
                className="login_username"
                onChange={handleLogin}
            />
            <input
                name="password"
                type="text"
                placeholder="Enter password"
                className="login_password"
                onChange={handleLogin}
            />
            <input type="submit" value="SIGN IN" className="login_submit" />
        </form>
    );
};
