import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import ToDoStructure from "../types";
export interface ToDoState {
  toDos: ToDoStructure[];
}
const initialState: ToDoState = {
  toDos: [],
};
export const toDoSlice = createSlice({
  name: "toDos",
  initialState,
  reducers: {
    loadToDo: (state, action: PayloadAction<ToDoStructure[]>): ToDoState => ({
      ...state,
      toDos: [...action.payload],
    }),
  },
});

export const { loadToDo: loadToDoActionCreator } = toDoSlice.actions;

export const toDosSliceReducer = toDoSlice.reducer;
