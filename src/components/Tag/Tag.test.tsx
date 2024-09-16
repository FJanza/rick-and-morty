import {render} from "@testing-library/react";
import {Status} from "@/Types/character";
import Tag, {stateColors} from ".";

const statusArray: Status[] = ["Alive", "Dead", "unknown"];

describe("Tag", () => {
  test.each(statusArray)("test_tag_renders_with_allowed_states", (state) => {
    const {getByText} = render(<Tag value={state} />);

    const elemento = getByText(state);

    expect(elemento).toHaveStyle(`background-color: ${stateColors[state]}`);
  });

  test("test_tag_does_not_render_with_invalid_state", () => {
    const {queryByTestId} = render(<Tag value={"InvalidState" as Status} />);
    expect(queryByTestId("tag-element")).not.toBeInTheDocument();
  });

  test("test_tag_does_not_render_tag_element_with_alive_status", () => {
    const {queryByTestId} = render(<Tag value={"Alive"} />);
    expect(queryByTestId("tag-element")).not.toBeInTheDocument();
  });
});
