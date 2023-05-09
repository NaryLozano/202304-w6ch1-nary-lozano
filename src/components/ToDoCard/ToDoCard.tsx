import ToDoStructure from "../../store/types";

export interface toDoCardProps {
  toDo: ToDoStructure;
}

const ToDoCard = ({ toDo: { name, isDone } }: toDoCardProps): JSX.Element => {
  return (
    <>
      <h2>{name}</h2>
      <input type="checkbox" id="IsDone" checked={isDone ? true : false} />
      <label htmlFor="IsDone">Done</label>
      <button>delete?</button>
    </>
  );
};
export default ToDoCard;
