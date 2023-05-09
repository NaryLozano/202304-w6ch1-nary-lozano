import { screen, render } from "@testing-library/react";
import { toDoMocks } from "../../mocks/mock";
import { setupStore } from "../../store";
import ToDoList from "./ToDoList";
import { Provider } from "react-redux";

describe("Given the ToDoList component", () => {
  describe("When is rendered", () => {
    test("Then it Should show two tasks", () => {
      const toDosStateMock = {
        toDos: toDoMocks,
      };

      const mockStore = setupStore({
        toDoStore: toDosStateMock,
      });

      render(
        <Provider store={mockStore}>
          <ToDoList />
        </Provider>
      );

      toDoMocks.forEach((toDo) => {
        const expectedHeading = screen.getByRole("heading", {
          level: 2,
          name: toDo.name,
        });
        expect(expectedHeading).toBeInTheDocument();
      });
    });
  });
});
