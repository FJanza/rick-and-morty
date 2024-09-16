import axios, {AxiosError, AxiosResponse} from "axios";

export const getCharactersPerPage = async (pageNumber?: number) => {
  const url = `${
    pageNumber
      ? "https://rickandmortyapi.com/api/character/?page=" + pageNumber
      : "https://rickandmortyapi.com/api/character"
  }`;

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: url,
    headers: {},
  };

  return axios
    .request(config)
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      console.log(error.message);
      return undefined;
    });
};

export const getDataFromUrl = async (url: string) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: url,
    headers: {},
  };

  return axios
    .request(config)
    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      console.log(error.message);
      return undefined;
    });
};
