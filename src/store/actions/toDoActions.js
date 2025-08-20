import axios from "axios";

export const SET_TASK = "set task";
export const ADD_TASK = "add task";
export const DELETE_TASK = "delete task";
export const COMPLETED_TASK = "completed task";
export const TASK_IN_PROGRESS = "task inprogress";

/*export function setTasks(tasks) {
    return { type: SET_TASKS, payload: tasks };
}*/

export const setTask = () => (dispatch) => {
    axios
        .get("https://68a2c82bc5a31eb7bb1dc243.mockapi.io/api/v1/tasks")
        .then((res) => {
            const setTask = { type: SET_TASK, payload: res.data }
            dispatch(setTask);
        })
        .catch((error) => console.error(error))
}

