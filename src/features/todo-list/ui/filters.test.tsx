import { fireEvent, render } from "@testing-library/react";
import { Filters } from "./filters";

describe("Filters Component", () => {
  it("applies border to the active filter button", async () => {
    const { getByText } = render(<Filters />);

    const completedButton = getByText("completed");
    const activeButton = getByText("active");
    const allButton = getByText("all");

    fireEvent.click(getByText("all"));
    expect(allButton).toHaveClass("border");
    expect(completedButton).not.toHaveClass("border");
    expect(activeButton).not.toHaveClass("border");

    fireEvent.click(getByText("active"));
    expect(allButton).not.toHaveClass("border");
    expect(completedButton).not.toHaveClass("border");
    expect(activeButton).toHaveClass("border");

    fireEvent.click(getByText("completed"));
    expect(allButton).not.toHaveClass("border");
    expect(completedButton).toHaveClass("border");
    expect(activeButton).not.toHaveClass("border");
  });
});
