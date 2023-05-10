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

  const handlerDelete = () => {
    dispatch(deleteToDoActionCreator(id));
  };

  return (
    <>
      <h2>{name}</h2>
      <input
        type="checkbox"
        id="IsDone"
        checked={isDone ? true : false}
        readOnly
      />
      <label htmlFor="IsDone">Done</label>
      <button onClick={handlerDelete}>delete?</button>
    </>
  );
};
export default ToDoCard;
