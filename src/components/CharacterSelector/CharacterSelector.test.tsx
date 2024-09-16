import {render, screen, waitFor} from "@testing-library/react";
import CharacterSelector from "@/components/CharacterSelector";
import {getCharactersPerPage, getDataFromUrl} from "@/service/service";
import {Character, Info, Location} from "@/Types/character";

jest.mock("@/service/service", () => ({
  getCharactersPerPage: jest.fn(),
  getDataFromUrl: jest.fn(),
}));

const mockCharacters: {info: Info; results: Character[]} = {
  info: {pages: 2, next: "url", prev: null, count: 2},
  results: [
    {
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
    },
    {
      id: 2,
      name: "Morty Smith",
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
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      episode: [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
      ],
      url: "https://rickandmortyapi.com/api/character/2",
      created: "2017-11-04T18:50:21.651Z",
    },
  ],
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

describe("CharacterSelector", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (getDataFromUrl as jest.Mock)
      .mockResolvedValueOnce(mockOrigin)
      .mockResolvedValueOnce(mockLocation);
  });

  it("should fetch and display characters correctly when it is first rendered", async () => {
    (getCharactersPerPage as jest.Mock).mockResolvedValue(mockCharacters);

    render(<CharacterSelector onChange={jest.fn()} title="Test Title" />);

    await waitFor(() => {
      expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
      expect(screen.getByText("Morty Smith")).toBeInTheDocument();
    });
  });

  it("should display a loading indicator while characters are being fetched", async () => {
    (getCharactersPerPage as jest.Mock)
      .mockImplementation(
        () => new Promise((resolve) => setTimeout(resolve, 1000))
      )
      .mockResolvedValueOnce(mockCharacters);

    render(<CharacterSelector onChange={jest.fn()} title="Test Title" />);

    expect(screen.getByAltText("Portal")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByAltText("Portal")).not.toBeInTheDocument();
    });
  });
});
