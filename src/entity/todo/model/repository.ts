import { Todo } from "./types";

import { z } from "zod";
import { LocalStorage } from "../../../shared/lib/local-storage";

const todoSchema = z.object({
  id: z.string(),
  name: z.string(),
  state: z.enum(["completed", "active"]),
});

const todosSchema = z.array(todoSchema);
const defaultTodos: Todo[] = [];

export const todosStorage = new LocalStorage(
  "todos",
  todosSchema,
  defaultTodos
);

export const todosRepository = {
  getTodos: (): Todo[] => {
    return todosStorage.get();
  },
  saveTodo: async (value: Todo) => {
    const todos = todosRepository.getTodos();
    const todoIndex = todos.findIndex((todo) => todo.id === value.id);

    if (todoIndex === -1) {
      todos.push(value);
    } else {
      todos[todoIndex] = value;
    }

    todosStorage.set(todos);
  },
  clearCompleted: () => {
    const todos = todosRepository.getTodos();
    todosStorage.set(todos.filter((todo) => todo.state !== "completed"));
  },
};
