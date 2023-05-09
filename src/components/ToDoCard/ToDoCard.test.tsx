import { render, screen } from "@testing-library/react";
import ToDoCard from "./ToDoCard";
import { toDoMock } from "../../mocks/mock";

describe("Given the toDoCard component", () => {
  describe("When its rendered with a 'Ask Frank if its going to rain' toDo", () => {
    test("Then it should show a heading with 'Ask Frank if its going to rain'", () => {
      render(<ToDoCard toDo={toDoMock} />);
      const toDoHeading = screen.getByRole("heading", {
        level: 2,
        name: toDoMock.name,
      });

      expect(toDoHeading).toBeInTheDocument();
    });
  });
});
