import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import TaskStructure from "../types";
export interface TaskState {
  tasks: TaskStructure[];
}
const initialState: TaskState = {
  tasks: [],
};
export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    loadTask: (state, action: PayloadAction<TaskStructure[]>): TaskState => ({
      ...state,
      tasks: [...action.payload],
    }),
  },
});

export const { loadTask: loadTaskActionCreator } = taskSlice.actions;

export const taskSliceReducer = taskSlice.reducer;
