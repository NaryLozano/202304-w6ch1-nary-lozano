import { useAppSelector } from "../../store";

const ToDoList = (): JSX.Element => {
  const toDos = useAppSelector((state) => state.toDoStore.toDos);
  return (
    <>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>
            <h2>{toDo.name}</h2>
            <input
              type="checkbox"
              id="IsDone"
              checked={toDo.isDone ? true : false}
            />
            <label htmlFor="IsDone">Done</label>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
