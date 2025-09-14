import { test } from "vitest";
import { render, screen } from "@testing-library/react";
import LineStatusCard from "./LineStatusCard";

test("renders line name and status and card is focusable", () => {
  const mockLine = {
    id: "bakerloo",
    name: "Bakerloo",
    lineStatuses: [{ statusSeverityDescription: "Good Service" }],
  };

  render(<LineStatusCard line={mockLine} />);

  expect(screen.getByText("Bakerloo")).toBeInTheDocument();
  expect(screen.getByText("Good Service")).toBeInTheDocument();

  const card = screen.getByLabelText("Status for Bakerloo line");
  expect(card).toHaveAttribute("tabindex", "0");
});

test("shows fallback status when none provided", () => {
  const mockLine = {
    id: "bakerloo",
    name: "Bakerloo",
    lineStatuses: [],
  };

  render(<LineStatusCard line={mockLine} />);

  expect(screen.getByText("Bakerloo")).toBeInTheDocument();
  expect(screen.getByText("Unknown")).toBeInTheDocument();
});
