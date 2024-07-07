import { useEffect } from "react";
import { useTodos } from "../../../entity/todo";
import { Filters } from "./filters";
import { FormCreateTodo } from "./form-create-todo";
import { TodoCard } from "./todo";

export function TodoList() {
  const { clearCompleted, getTodos, activeTodosCount, todos, changeStateTodo } =
    useTodos();

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <main className="min-h-screen bg-gray-200">
      <div className="max-w-[600px] w-full space-y-2 mx-auto pt-12">
        <h1 className="text-2xl text-center">TODOS</h1>
        <div className="bg-white">
          <FormCreateTodo />
          {todos.length === 0 && (
            <div className="h-52 flex items-center justify-center">
              <div className="text-sm text-gray-600 font-semibold">
                Task list is empty
              </div>
            </div>
          )}
          {todos.reverse().map((todo) => {
            return (
              <TodoCard
                id={todo.id}
                state={todo.state}
                name={todo.name}
                changeStateTodo={changeStateTodo}
              />
            );
          })}
          <div className="flex justify-between items-center text-sm text-gray-400 py-[6px] px-2 border-t">
            <div>{activeTodosCount} items left</div>
            <Filters />
            <div>
              <button onClick={() => clearCompleted()}>Clear completed</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
