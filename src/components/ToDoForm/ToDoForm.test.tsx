import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import ToDoForm from "./ToDoForm";
import { store } from "../../store";

describe("Given a ToDoForm component", () => {
  describe("When is rendered", () => {
    test("Then it should show the a form with a form with a label 'New Task:'", () => {
      const expectedText1 = "New Task:";

      render(
        <Provider store={store}>
          <ToDoForm />
        </Provider>
      );

      const text1 = screen.getByText(expectedText1);
      expect(text1).toBeInTheDocument();
    });
  });
});
