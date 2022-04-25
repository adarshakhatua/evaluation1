import { createContext, useState } from "react";


const EmployeeContext = createContext();

const EmployeeContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const handeleIsAuth = (isAuth) => {
        setIsAuth(token!=="" ||token!==undefined ?true:false);
    }
    const [employee, setEmployee] = useState([]);
    const handleEmployees = () => {
        fetch("http://localhost:8080/employee").then((d) => { return d.json() }).then((data) => { setEmployee(data) })
    }
    const[token,setToken]=useState("")
    const handleToken = (user) => {
        fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then((d) => d.json()).then((data) => { setToken(data.token) });
    }
    return (
        <EmployeeContext.Provider value={{employee,handleEmployees,isAuth,handeleIsAuth,token,handleToken}}>{children}</EmployeeContext.Provider>
    )
}

export { EmployeeContext, EmployeeContextProvider };