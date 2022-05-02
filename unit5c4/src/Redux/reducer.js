import { DO_LOGIN } from "./action";

export const authReducer = (store,action) => {
    switch (action.type) {
        case DO_LOGIN:
            return {
                ...store,user:action.payload
            }
    }
}