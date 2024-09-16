import axios from "axios";
import {getCharactersPerPage, getDataFromUrl} from "./service";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("getCharactersPerPage", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should fetch characters from the first page", async () => {
    const expectedData = {results: [{name: "Rick"}, {name: "Morty"}]};
    mockedAxios.request.mockResolvedValue({data: expectedData});

    const data = await getCharactersPerPage();

    expect(data).toEqual(expectedData);
    expect(mockedAxios.request).toHaveBeenCalledWith(
      expect.objectContaining({
        url: "https://rickandmortyapi.com/api/character",
      })
    );
  });

  it("should fetch characters from a specific page", async () => {
    const pageNumber = 2;
    const expectedData = {results: [{name: "Summer"}, {name: "Beth"}]};
    mockedAxios.request.mockResolvedValue({data: expectedData});

    const data = await getCharactersPerPage(pageNumber);

    expect(data).toEqual(expectedData);
    expect(mockedAxios.request).toHaveBeenCalledWith(
      expect.objectContaining({
        url: `https://rickandmortyapi.com/api/character/?page=${pageNumber}`,
      })
    );
  });

  it("should handle errors and return undefined", async () => {
    mockedAxios.request.mockRejectedValue(new Error("Network Error"));

    const data = await getCharactersPerPage();

    expect(data).toBeUndefined();
  });
});

describe("getDataFromUrl", () => {
  it("should fetch data from the provided URL", async () => {
    const url = "https://example.com/api/data";
    const expectedData = {key: "value"};
    mockedAxios.request.mockResolvedValue({data: expectedData});

    const data = await getDataFromUrl(url);

    expect(data).toEqual(expectedData);
    expect(mockedAxios.request).toHaveBeenCalledWith(
      expect.objectContaining({
        url: url,
      })
    );
  });

  it("should handle errors and return undefined", async () => {
    mockedAxios.request.mockRejectedValue(new Error("Network Error"));

    const data = await getDataFromUrl("https://example.com/api/data");

    expect(data).toBeUndefined();
  });
});
