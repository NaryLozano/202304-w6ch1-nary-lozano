import { useCallback } from "react";
import axios from "axios";
import ToDoStructure from "../store/types";

export const toDoApi = import.meta.env.VITE_APP_TODO_API;

const useApi = () => {
  const getToDos = useCallback(async (): Promise<ToDoStructure[]> => {
    const { data: toDos } = await axios.get(`${toDoApi}/toDos`);
    return toDos;
  }, []);
  return { getToDos };
};

export default useApi;
