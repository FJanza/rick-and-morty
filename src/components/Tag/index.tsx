import React from "react";
import {TagProps} from "./types";

export const stateColors = {
  Alive: "#119944",
  Dead: "#771122",
  unknown: "#661188",
};

const Tag = ({state, style}: TagProps) => {
  return (
    <span
      data-test-id="tag-element"
      className="inline-block  rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
      style={{...style, backgroundColor: stateColors[state]}}
    >
      {state}
    </span>
  );
};

export default Tag;
