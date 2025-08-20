export const SET_TASKS = "set task";
export const ADD_TASK = "add task";
export const DELETE_TASK = "delete task";
export const COMPLETED_TASK = "completed task";
export const TASK_IN_PROGRESS = "task inprogress";

export function setTasks(tasks) {
    return { type: SET_TASKS, payload: tasks };
}

