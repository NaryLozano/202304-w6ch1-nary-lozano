import { useCallback } from "react";
import axios from "axios";
import ToDoStructure from "../store/types";
import { newTodoStructure } from "../components/ToDoForm/types";

export const toDoApi = import.meta.env.VITE_APP_TODO_API;

const useApi = () => {
  const getToDos = useCallback(async (): Promise<ToDoStructure[]> => {
    const { data: toDos } = await axios.get(`${toDoApi}/ToDos`);
    return toDos;
  }, []);
  const removeToDos = async (toDoId: number) => {
    const { status, data } = await axios.delete(`${toDoApi}/ToDos/${toDoId}`);
    return { status, data };
  };
  const addToDo = async (newToDo: newTodoStructure): Promise<ToDoStructure> => {
    const { data } = await axios.post(`${toDoApi}/ToDos`, newToDo);
    return data;
  };
  return { getToDos, removeToDos, addToDo };
};

export default useApi;
