import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import { useAppDispatch } from "../../store";
import ToDoForm from "../ToDoForm/ToDoForm";
import ToDoList from "../ToDoList/ToDoList";
import { loadToDoActionCreator } from "../../store/toDos/toDosSlice";

const App = (): JSX.Element => {
  const { getToDos } = useApi();
  const dispatch = useAppDispatch();
  useEffect(() => {
    (async () => {
      try {
        const toDos = await getToDos();
        dispatch(loadToDoActionCreator(toDos));
      } catch {
        return;
      }
    })();
  }, [dispatch, getToDos]);

  return (
    <div className="container">
      <ToDoForm></ToDoForm>
      <ToDoList />
    </div>
  );
};

export default App;
