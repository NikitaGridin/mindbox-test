import { fireEvent, render } from "@testing-library/react";
import { TodoCard } from "./todo";

describe("TodoCard", () => {
  const mockChangeStateTodo = vi.fn();
  const todoProps = {
    id: "1",
    state: "active" as "active",
    name: "Test TodoCard",
    changeStateTodo: mockChangeStateTodo,
  };

  it("renders correctly", () => {
    const { getByText } = render(
      <TodoCard
        id={todoProps.id}
        state={todoProps.state}
        name={todoProps.name}
        changeStateTodo={todoProps.changeStateTodo}
      />
    );
    expect(getByText("Test TodoCard")).toBeInTheDocument();
  });

  it("changes state on click", () => {
    const { getByText } = render(
      <TodoCard
        id={todoProps.id}
        state={todoProps.state}
        name={todoProps.name}
        changeStateTodo={todoProps.changeStateTodo}
      />
    );
    fireEvent.click(getByText("Test TodoCard"));
    expect(mockChangeStateTodo).toHaveBeenCalledWith({
      id: "1",
      state: "completed",
    });
  });

  it("renders in active state", () => {
    const { getByText } = render(
      <TodoCard
        id={todoProps.id}
        state={todoProps.state}
        name={todoProps.name}
        changeStateTodo={todoProps.changeStateTodo}
      />
    );
    expect(getByText("Test TodoCard")).toHaveClass("text-gray-600");
    expect(getByText("Test TodoCard")).not.toHaveClass("line-through");
  });

  it("renders in completed state", () => {
    const completedProps = { ...todoProps, state: "completed" as "completed" };
    const { getByText } = render(
      <TodoCard
        id={completedProps.id}
        state={completedProps.state}
        name={completedProps.name}
        changeStateTodo={completedProps.changeStateTodo}
      />
    );
    expect(getByText("Test TodoCard")).toHaveClass("text-gray-400");
    expect(getByText("Test TodoCard")).toHaveClass("line-through");
  });
});
