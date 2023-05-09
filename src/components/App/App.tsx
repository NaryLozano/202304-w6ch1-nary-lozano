import ToDoForm from "../ToDoForm/ToDoForm";
import ToDoList from "../ToDoList/ToDoList";

const App = (): JSX.Element => {
  return (
    <>
      <ToDoForm></ToDoForm>
      <ToDoList />
    </>
  );
};

export default App;
