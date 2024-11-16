import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        taskList: [],
    },
    reducers: {
        addTask: (state, action) => {
            state.taskList.push(action.payload);
        },
        toggleTaskCompletion: (state, action) => {
            const task = state.taskList.find(task => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        },
        removeTask: (state, action) => {
            state.taskList = state.taskList.filter(task => task.id !== action.payload);
        },
    },
});

export const { addTask, toggleTaskCompletion, removeTask } = appSlice.actions;
export default appSlice.reducer;
