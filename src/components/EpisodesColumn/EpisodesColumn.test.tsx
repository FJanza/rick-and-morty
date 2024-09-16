import React from "react";
import {render, screen} from "@testing-library/react";
import EpisodesColumn from "./index";
import {Episode} from "@/Types/character";

describe("EpisodesColumn", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });
  test("test_render_correct_number_of_episodes", () => {
    const episodes: Episode[] = [
      {
        id: 1,
        name: "Pilot",
        air_date: "December 2, 2013",
        episode: "S01E01",
        characters: [
          "https://rickandmortyapi.com/api/character/1",
          "https://rickandmortyapi.com/api/character/2",
        ],
        url: "https://rickandmortyapi.com/api/episode/1",
        created: "2017-11-10T12:56:33.798Z",
      },
      {
        id: 28,
        name: "The Ricklantis Mixup",
        air_date: "September 10, 2017",
        episode: "S03E07",
        characters: [
          "https://rickandmortyapi.com/api/character/1",
          "https://rickandmortyapi.com/api/character/2",
        ],
        url: "https://rickandmortyapi.com/api/episode/28",
        created: "2017-11-10T12:56:36.618Z",
      },
    ];
    render(
      <EpisodesColumn name="Rick Sanchez" episodes={episodes} id="test-id" />
    );
    expect(screen.getByText("Rick Sanchez - 2 Episodes")).toBeInTheDocument();
    expect(
      screen.getByText("S01E01 - Pilot - December 2, 2013")
    ).toBeInTheDocument();
    expect(
      screen.getByText("S03E07 - The Ricklantis Mixup - September 10, 2017")
    ).toBeInTheDocument();
  });

  test("test_display_no_chapters_message", () => {
    render(<EpisodesColumn name="Messi" episodes={[]} id="test-id" />);
    expect(screen.getByText("There are no chapters")).toBeInTheDocument();
  });

  test("test_apply_id_prop_correctly", () => {
    render(<EpisodesColumn name="Messi" episodes={[]} id="test-id" />);
    const divElement = screen.getByTestId("test-id");
    expect(divElement).toBeInTheDocument();
  });
});
