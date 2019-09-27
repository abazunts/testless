import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import historyReducer from "./historyReducer";
import loginReducer from "./loginReducer";


const reducers = combineReducers({
    historyPage: historyReducer,
    loginPage: loginReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;