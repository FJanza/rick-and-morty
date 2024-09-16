export interface Character {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  origin: LocationSm;
  location: LocationSm;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export type Gender = "Female" | "Male" | "Genderless" | "unknown";

export interface LocationSm {
  name: string;
  url: string;
}

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export type Status = "Alive" | "Dead" | "unknown";

export type Gender = "Female" | "Male" | "Genderless" | "unknown";

export interface Info {
  count: number;
  next: null | string;
  pages: number;
  prev: null | string;
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}
