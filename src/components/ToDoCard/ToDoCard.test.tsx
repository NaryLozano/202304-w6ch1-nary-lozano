import { render, screen } from "@testing-library/react";
import ToDoCard from "./ToDoCard";
import { toDoMock } from "../../mocks/mock";
import { Provider } from "react-redux";
import { store } from "../../store";

describe("Given the toDoCard component", () => {
  describe("When its rendered with a 'Ask Frank if its going to rain' toDo", () => {
    test("Then it should show a heading with 'Ask Frank if its going to rain'", () => {
      render(
        <Provider store={store}>
          <ToDoCard toDo={toDoMock} />
        </Provider>
      );
      const toDoHeading = screen.getByRole("heading", {
        level: 2,
        name: toDoMock.name,
      });

      expect(toDoHeading).toBeInTheDocument();
    });
  });
});
