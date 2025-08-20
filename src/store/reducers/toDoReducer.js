import { ADD_TASK, COMPLETED_TASK, DELETE_TASK, SET_TASK, TASK_IN_PROGRESS } from "../actions/toDoActions";

export const initialState = [];

export const toDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASK:
            return action.payload;
        //case ADD_TASK:
        //    return [...state, action.payload];
        //case DELETE_TASK:
        //    return state.filter((item) => item.id !== action.payload);
        //case COMPLETED_TASK:
        //    return;
        //case TASK_IN_PROGRESS:
        //    return;
        default:
            return state;
    }
}