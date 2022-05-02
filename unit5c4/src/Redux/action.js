//Action type
export const DO_LOGIN = "DO_LOGIN";
export const DO_LOGOUT = "DO_LOGOUT";

//Action creator
export const doLogin = (data) => {
    return {
        type: DO_LOGIN,
        payload:data
    }
}
   


export const doLogout = (data) => {
    return {
        type: DO_LOGOUT,
        payload: data
    }
}

