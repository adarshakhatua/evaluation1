import { legacy_createStore as createStore } from "redux";
import { authReducer } from "./reducer";

export const store = createStore(authReducer, { user: {} });

store.subscribe(() => {
    console.log(store.getState());
})
