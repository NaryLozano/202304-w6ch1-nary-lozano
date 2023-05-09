import { renderHook } from "@testing-library/react";
import { toDoMocks } from "../mocks/mock";
import useApi from "./useApi";

describe("Given a getToDos function", () => {
  describe("When its called", () => {
    test("Then it should return a list of ToDos", async () => {
      const expectResult = toDoMocks;

      const {
        result: {
          current: { getToDos },
        },
      } = renderHook(() => useApi());

      const toDosList = await getToDos();

      expect(toDosList).toStrictEqual(expectResult);
    });
  });
});
