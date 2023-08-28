import { render, screen } from "@testing-library/preact";
import { describe, expect, it } from "vitest";
import AppBar from "./AppBar";

describe("<AppBar /> tests", () => {
  it("should render", () => {
    render(<AppBar />);

    expect(
      screen.getByText(`${import.meta.env.VITE_SITE_TITLE}`)
    ).toBeInTheDocument();
  });
});
