import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doLogin } from "../Redux/action";

export const Login = () => {
    const dispatch = useDispatch();
    // const user = useSelector((store) => store.user);
    const [user, setUser] = useState({});
    const handleLogin = (e) => {
        setUser({
            [e.target.name]: e.target.value
        });
    }
    
    return (
        <div>
            <input
                className="username"
                type="text"
                name="username"
                placeholder="Enter Username"
                onChange={handleLogin}
            />
            <input
                className="password"
                type="password"
                name="password"
                placeholder="Enter password"
                onChange={handleLogin}
            />
            {/* On this button click make network req to find user with same username and password */}
            {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
            <button className="submit" onClick={() => { fetch(`http://localhost:8080/users?username=${user.username}`).then((d) => d.json()).then((data) => { dispatch(doLogin(user)) })}}>Login</button>
        </div>
    );
}