import { create } from "zustand";
import { createId } from "../../../shared/lib/id";
import { todosRepository } from "./repository";
import { Filter, State, Todo } from "./types";

export type TodosStore = {
  currentFilter: Filter;
  filters: Filter[];
  todos: Todo[];
  activeTodosCount: number;
  getTodos: () => void;
  createTodo: ({ name }: { name: string }) => void;
  changeStateTodo: ({ id, state }: { id: string; state: State }) => void;
  clearCompleted: () => void;
  changeFilter: ({ filter }: { filter: Filter }) => void;
};

export const useTodos = create<TodosStore>((set, get) => ({
  currentFilter: "all",
  todos: [],
  filters: ["all", "completed", "active"],
  activeTodosCount: 0,
  getTodos: () => {
    const todos = todosRepository.getTodos();
    const filteredTodos =
      get().currentFilter === "all"
        ? todos
        : todos.filter((todo) => todo.state === get().currentFilter);

    const activeCount = todos.filter((todo) => todo.state === "active").length;

    set({
      todos: filteredTodos,
      activeTodosCount: activeCount,
    });
  },
  createTodo: ({ name }) => {
    const todo: Todo = { id: createId(), name, state: "active" };
    todosRepository.saveTodo(todo);
    get().getTodos();
  },
  changeStateTodo: ({ id, state }) => {
    const todos = todosRepository.getTodos();
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, state } : todo
    );
    updatedTodos.forEach(todosRepository.saveTodo);
    set({
      todos: updatedTodos,
    });
    get().getTodos();
  },
  clearCompleted: () => {
    todosRepository.clearCompleted();
    set({
      todos: todosRepository.getTodos(),
    });
    get().getTodos();
  },
  changeFilter: ({ filter }) => {
    set({
      currentFilter: filter,
    });
    get().getTodos();
  },
}));
