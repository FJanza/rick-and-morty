import {render, screen} from "@testing-library/react";
import LocationCard from "./index";

import "@testing-library/jest-dom";
import {Location} from "@/Types/character";

describe("LocationCard", () => {
  const mockLocation: Location = {
    name: "Earth",
    type: "Planet",
    dimension: "C-137",
    id: 1,
    created: "2015-07-05",
    residents: [],
    url: "https://rickandmortyapi.com/api/location/1",
  };

  test("test_display_location_details", () => {
    render(<LocationCard title="Origin" location={mockLocation} />);
    expect(screen.getByText("Earth")).toBeInTheDocument();
    expect(screen.getByText("Planet")).toBeInTheDocument();
    expect(screen.getByText("C-137")).toBeInTheDocument();
  });

  test("test_render_censored_image", () => {
    render(<LocationCard title="Origin" location={undefined} />);
    const censoredImage = screen.getByRole("img", {name: "censored"});
    expect(censoredImage).toBeInTheDocument();
  });
});
