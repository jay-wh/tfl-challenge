import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import App from "./App";

// Mock useFetch
vi.mock("./hooks/useFetch", () => ({
  useFetch: () => ({
    data: [
      {
        id: "bakerloo",
        name: "Bakerloo",
        lineStatuses: [{ statusSeverityDescription: "Good Service" }],
      },
      {
        id: "central",
        name: "Central",
        lineStatuses: [{ statusSeverityDescription: "Minor Delays" }],
      },
    ],
    loading: false,
  }),
}));

test("renders app and displays heading and tube lines", () => {
  render(<App />);

  expect(screen.getByText("London Tube Status")).toBeInTheDocument();

  expect(screen.getByText("Bakerloo")).toBeInTheDocument();
  expect(screen.getByText("Good Service")).toBeInTheDocument();

  expect(screen.getByText("Central")).toBeInTheDocument();
  expect(screen.getByText("Minor Delays")).toBeInTheDocument();
});
