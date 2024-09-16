import React from "react";
import {render, screen, waitFor} from "@testing-library/react";
import EpisodesList from "@/components/EpisodesList";
import {getDataFromUrl} from "@/service/service";
import {Episode} from "@/Types/character";

jest.mock("@/service/service");

const mockGetEpisodeInfo = getDataFromUrl as jest.MockedFunction<
  typeof getDataFromUrl
>;

describe("EpisodesList", () => {
  const mockEpisodes: Episode[] = [
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

  beforeEach(() => {
    mockGetEpisodeInfo.mockClear();
  });

  it("should correctly fetch and display 1 Episodes for the left character when `chEpLeft` is provided", async () => {
    mockGetEpisodeInfo.mockResolvedValueOnce(mockEpisodes[0]);

    render(
      <EpisodesList
        chLeft="Character A"
        chEpLeft={["url1"]}
        chRight=""
        chEpRight={[]}
      />
    );

    await waitFor(() =>
      expect(mockGetEpisodeInfo).toHaveBeenCalledWith("url1")
    );
    await waitFor(() =>
      expect(screen.getByText("Character A - 1 Episodes")).toBeInTheDocument()
    );
  });

  it("should handle cases where `chEpLeft` or `chEpRight` is not provided by not attempting to fetch episodes", async () => {
    render(
      <EpisodesList
        chLeft="Character A"
        chEpLeft={[]}
        chRight="Character B"
        chEpRight={[]}
      />
    );

    await waitFor(() => expect(mockGetEpisodeInfo).not.toHaveBeenCalled());
  });
});
