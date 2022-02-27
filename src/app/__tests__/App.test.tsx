import React from "react";
import { render } from "react-dom";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { App } from "../";

it("should render app correctly", () => {
  const root = document.createElement("div");
  document.body.appendChild(root);
  render(<App />, root);
  expect(screen.getByText(/Sort By/i)).toBeInTheDocument();
});
