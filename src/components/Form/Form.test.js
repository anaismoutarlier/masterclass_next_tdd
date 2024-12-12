import Form from "./Form";
import { render, screen, fireEvent } from "@testing-library/react";

test("Form is submitted and shows success message", () => {
  render(<Form />);
  const input = screen.getByRole("textbox");
  const button = screen.getByRole("button");
  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();
  fireEvent.change(input, { target: { value: "test input" } });
  expect(input.value).toBe("test input");
  fireEvent.click(button);
  const successText = screen.getByText(/thank you/i);
  expect(successText).toBeInTheDocument();
});
