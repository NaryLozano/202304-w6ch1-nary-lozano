import useApi from "../../hooks/useApi";
import { useAppDispatch } from "../../store";
import { deleteToDoActionCreator } from "../../store/toDos/toDosSlice";
import ToDoStructure from "../../store/types";

export interface toDoCardProps {
  toDo: ToDoStructure;
}

const ToDoCard = ({
  toDo: { name, isDone, id },
}: toDoCardProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const { removeToDos } = useApi();

  const handlerDelete = async () => {
    try {
      await removeToDos(id);
    } catch {
      return;
    }
    dispatch(deleteToDoActionCreator(id));
  };

  return (
    <article>
      <h2>{name}</h2>
      <input
        type="checkbox"
        id="IsDone"
        checked={isDone ? true : false}
        readOnly
      />
      <label htmlFor="IsDone">Done</label>
      <button onClick={handlerDelete}>Delete</button>
    </article>
  );
};
export default ToDoCard;
