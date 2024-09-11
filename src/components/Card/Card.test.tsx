import {render, screen} from "@testing-library/react";
import Card from ".";

describe("Card tests", () => {
  test("Testing Card data", () => {
    render(
      <Card
        img="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        name="Rick Sanchez"
        state="Alive"
      />
    );

    const img = document.querySelector("img") as HTMLImageElement;

    expect(img).toHaveAttribute(
      "src",
      "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    );
  });
});
