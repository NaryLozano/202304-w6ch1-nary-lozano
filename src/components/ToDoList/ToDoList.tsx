import { useAppSelector } from "../../store";
import ToDoCard from "../ToDoCard/ToDoCard";

const ToDoList = (): JSX.Element => {
  const toDos = useAppSelector((state) => state.toDoStore.toDos);
  return (
    <>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>
            <ToDoCard toDo={toDo} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
