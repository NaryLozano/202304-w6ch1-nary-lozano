import { rest } from "msw";
import { toDoMocks } from "./mock";
import { toDoApi } from "../hooks/useApi";

export const handlers = [
  rest.get(`${toDoApi}/toDos`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(toDoMocks));
  }),
];
