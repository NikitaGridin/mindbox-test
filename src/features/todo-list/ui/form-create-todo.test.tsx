import { fireEvent, render } from "@testing-library/react";
import { FormCreateTodo } from "./form-create-todo";

describe("FormCreateTodo", () => {
  it("submits the form with correct name", () => {
    const { getByPlaceholderText, getByText } = render(<FormCreateTodo />);

    // Simulate typing into the input field
    const input = getByPlaceholderText("What needs to be done?");
    fireEvent.change(input, { target: { value: "Test Task" } });

    // Submit the form
    const addButton = getByText("Add");
    fireEvent.click(addButton);
  });
});
