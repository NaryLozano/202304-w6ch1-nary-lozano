import { useCallback } from "react";
import axios from "axios";
import ToDoStructure from "../store/types";

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
  return { getToDos, removeToDos };
};

export default useApi;
