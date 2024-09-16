import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import Card from "./index";
import {CardProps} from "./types";
import {Character} from "@/Types/character";

jest.mock("@/service/service", () => ({
  getDataFromUrl: jest.fn(),
}));

describe("Card", () => {
  const character: Character = {
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
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    episode: [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
    ],
    url: "https://rickandmortyapi.com/api/character/1",
    created: "2017-11-04T18:48:46.250Z",
  };

  const defaultProps: CardProps = {
    character,
    onClick: jest.fn(),
    isSelected: false,
    id: "card-1",
  };

  test("test_card_renders_character_image", () => {
    render(<Card {...defaultProps} />);
    const imgElement = screen.getByAltText(`${character.name}-img`);
    expect(imgElement).toHaveAttribute("src", character.image);
  });

  test("test_card_applies_selected_border_color", () => {
    render(<Card {...defaultProps} isSelected={true} />);
    const cardElement = screen.getByTestId("card-1");
    expect(cardElement).toHaveStyle("border-color: rgb(32 211 238)");
  });

  test("test_card_calls_onclick_handler", () => {
    render(<Card {...defaultProps} />);
    const cardElement = screen.getByTestId("card-1");
    fireEvent.click(cardElement);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
});
