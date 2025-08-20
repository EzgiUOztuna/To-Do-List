import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { toDoReducer } from "./reducers/toDoReducer";
import { thunk } from "redux-thunk";

export const reducers = combineReducers({
    toDos: toDoReducer,
})

export const myStore = createStore(reducers, applyMiddleware(thunk));