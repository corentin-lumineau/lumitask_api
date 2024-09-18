export const selectModaleIsDisplayed = (state) => state.modale.open;
export const getAllTasks = (state) => state.tasks.items;
export const getTasksStatus = (state) => state.tasks.status;
export const getTasksError = (state) => state.tasks.error;