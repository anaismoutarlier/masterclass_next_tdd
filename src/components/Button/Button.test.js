import { Button } from "./Button";
import { render, screen, fireEvent } from "@testing-library/react";

test("Button component renders a button HTML element", () => {
  render(<Button />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("Button accepts props", () => {
  let i = 0;
  const increment = () => {
    i++;
  };
  render(<Button onClick={increment}>TEST</Button>);
  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(i).toBe(1);
  expect(button).toHaveTextContent("TEST");
});

test("Button is red is default", () => {
  render(<Button />);
  const button = screen.getByRole("button");
  expect(button).toHaveStyle("background-color: red");
});

test("Button accepts custom background color", () => {
  render(<Button backgroundColor="green" />);
  const button = screen.getByRole("button");
  expect(button).toHaveStyle("background-color: green");
});
