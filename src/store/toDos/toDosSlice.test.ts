import toDoMocks from "../../mocks/mock";
import ToDoStructure from "../types";
import {
  ToDoState,
  loadToDoActionCreator,
  toDosSliceReducer,
} from "./toDosSlice";

describe("Given a loadTasksReducer Reducers", () => {
  describe("When it receives an empty list of task and a loadTask action with two tasks", () => {
    test("Then it should return the list with the two new tasks ", () => {
      const currentTask: ToDoStructure[] = [];

      const currentState: ToDoState = { toDos: currentTask };

      const loadTasksAction = loadToDoActionCreator(toDoMocks);

      const expectedNewTaskState: ToDoState = {
        ...currentState,
        toDos: toDoMocks,
      };

      const newTaskState: ToDoState = toDosSliceReducer(
        currentState,
        loadTasksAction
      );

      expect(expectedNewTaskState).toStrictEqual(newTaskState);
    });
  });
});
