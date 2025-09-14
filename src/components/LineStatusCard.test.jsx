import { test } from "vitest";
import { render, screen } from "@testing-library/react";
import LineStatusCard from "./LineStatusCard";

const mockLine = {
  id: "bakerloo",
  name: "Bakerloo",
  lineStatuses: [{ statusSeverityDescription: "Good Service" }],
};

test("renders line name and status", () => {
  render(<LineStatusCard line={mockLine} />);

  expect(screen.getByText("Bakerloo")).toBeInTheDocument();
  expect(screen.getByText("Good Service")).toBeInTheDocument();
});
