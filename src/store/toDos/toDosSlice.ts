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
    loadToDo: (
      currentState,
      action: PayloadAction<ToDoStructure[]>
    ): ToDoState => ({
      ...currentState,
      toDos: [...action.payload],
    }),
    deleteToDo: (currentState, action: PayloadAction<number>): ToDoState => ({
      ...currentState,
      toDos: currentState.toDos.filter((toDo) => toDo.id !== action.payload),
    }),
  },
});

export const { loadToDo: loadToDoActionCreator } = toDoSlice.actions;
export const { deleteToDo: deleteToDoActionCreator } = toDoSlice.actions;

export const toDosSliceReducer = toDoSlice.reducer;
