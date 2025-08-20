import { legacy_createStore as createStore } from "redux";
import { toDoReducer } from "./reducers/toDoReducer";

export const myStore = createStore(toDoReducer);