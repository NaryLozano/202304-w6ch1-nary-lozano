import taskMocks from "../../mocks/mock";
import TaskStructure from "../types";
import {
  TaskState,
  loadTaskActionCreator,
  taskSliceReducer,
} from "./tasksSlice";

describe("Given a loadTasksReducer Reducers", () => {
  describe("When it receives an empty list of task and a loadTask action with two tasks", () => {
    test("Then it should return the list with the two new tasks ", () => {
      const currentTask: TaskStructure[] = [];

      const currentState: TaskState = { tasks: currentTask };

      const loadTasksAction = loadTaskActionCreator(taskMocks);

      const expectedNewTaskState: TaskState = {
        ...currentState,
        tasks: taskMocks,
      };

      const newTaskState: TaskState = taskSliceReducer(
        currentState,
        loadTasksAction
      );

      expect(expectedNewTaskState).toStrictEqual(newTaskState);
    });
  });
});
