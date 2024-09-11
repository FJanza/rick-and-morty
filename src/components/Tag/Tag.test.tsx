import {getByText, render, screen} from "@testing-library/react";
import {Status} from "@/Types/character";
import Tag, {stateColors} from ".";

const statusArray: Status[] = ["Alive", "Dead", "unknown"];

describe("Tag", () => {
  test.each(statusArray)("Should render with allow states", (state) => {
    const {getByText} = render(<Tag state={state} />);

    const elemento = getByText(state);

    expect(elemento).toHaveStyle(`background-color: ${stateColors[state]}`);
  });

  test("should render with avoid state", () => {
    const {queryByTestId} = render(<Tag state={"Alive"} />);
    expect(queryByTestId("tag-element")).not.toBeInTheDocument();
  });
});
