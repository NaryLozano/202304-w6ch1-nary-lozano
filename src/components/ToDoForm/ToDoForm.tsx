import { useState } from "react";
import useApi from "../../hooks/useApi";
import { useAppDispatch } from "../../store";
import { addToDoActionCreator } from "../../store/toDos/toDosSlice";
import { newTodoStructure } from "./types";

const ToDoForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { addToDo } = useApi();
  const [toDo, setToDo] = useState<newTodoStructure>({
    name: "",
    isDone: false,
  });

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const newToDo = await addToDo(toDo);
    dispatch(addToDoActionCreator(newToDo));
  };

  const toDoInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToDo({ ...toDo, name: event.target.value });
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="name">New Task:</label>
      <input type="text" id="name" onChange={toDoInput} />

      <label htmlFor="text">Update Task: </label>
      <input type="text" />
      <button type="submit">Add ToDo</button>
    </form>
  );
};
export default ToDoForm;
