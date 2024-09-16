import {render, screen, fireEvent, waitFor} from "@testing-library/react";
import "@testing-library/jest-dom";
import {getDataFromUrl} from "@/service/service";
import {Character, Location} from "@/Types/character";
import {DialogInfo} from ".";

jest.mock("@/service/service", () => ({
  getDataFromUrl: jest.fn(),
}));

const mockCharacter: Character = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {
    name: "Earth",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  location: {
    name: "Earth",
    url: "https://rickandmortyapi.com/api/location/3",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  episode: [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
  ],
  url: "https://rickandmortyapi.com/api/character/1",
  created: "2017-11-04T18:48:46.250Z",
};

const mockOrigin: Location = {
  id: 1,
  name: "Earth",
  type: "Planet",
  dimension: "Dimension C-137",
  residents: [
    "https://rickandmortyapi.com/api/character/1",
    "https://rickandmortyapi.com/api/character/2",
  ],
  url: "https://rickandmortyapi.com/api/location/1",
  created: "2017-11-10T12:42:04.162Z",
};

const mockLocation: Location = {
  id: 3,
  name: "Citadel of Ricks",
  type: "Space station",
  dimension: "unknown",
  residents: [
    "https://rickandmortyapi.com/api/character/8",
    "https://rickandmortyapi.com/api/character/14",
  ],
  url: "https://rickandmortyapi.com/api/location/3",
  created: "2017-11-10T13:08:13.191Z",
};

describe("DialogInfo Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (getDataFromUrl as jest.Mock)
      .mockResolvedValueOnce(mockOrigin)
      .mockResolvedValueOnce(mockLocation);
  });

  it("test_fetch_and_display_location_data", async () => {
    render(<DialogInfo character={mockCharacter} />);

    await waitFor(() => {
      expect(getDataFromUrl).toHaveBeenCalledWith(mockCharacter.origin.url);
      expect(getDataFromUrl).toHaveBeenCalledWith(mockCharacter.location.url);
    });

    const triggerOpen = screen.getByRole("open-button");
    fireEvent.click(triggerOpen);

    expect(screen.getByText("Origin")).toBeInTheDocument();
    expect(screen.getByText("Last Location")).toBeInTheDocument();
  });

  it("test_handle_undefined_urls", async () => {
    const characterWithUndefinedUrls = {
      ...mockCharacter,
      origin: {url: "", name: ""},
      location: {url: "", name: ""},
    };

    render(<DialogInfo character={characterWithUndefinedUrls} />);

    const triggerOpen = screen.getByRole("open-button");
    fireEvent.click(triggerOpen);

    expect(screen.getByText("Origin")).toBeInTheDocument();
    expect(screen.getByText("Last Location")).toBeInTheDocument();
    expect(screen.getAllByAltText("censored").length).toEqual(2);
  });
});
