import { ADD_TASK, COMPLETED_TASK, DELETE_TASK, TASK_IN_PROGRESS } from "../actions/toDoActions";

const initialState = [];

export const toDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return [...state, action.payload];
        case DELETE_TASK:
            return state.filter((item) => item.id !== action.payload);
        //case COMPLETED_TASK:
        //    return;
        //case TASK_IN_PROGRESS:
        //    return;
        default:
            return state;
    }

}