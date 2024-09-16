import React from "react";
import {TagProps} from "./types";

export const stateColors = {
  Alive: "#119944",
  Dead: "#771122",
  unknown: "#661188",
  Female: "#FF7799",
  Male: "#3366AA",
  Genderless: "#777",
};

const Tag = ({value, style}: TagProps) => {
  return (
    <span
      data-test-id="tag-element"
      className="inline-block  rounded-full px-2 py-1 text-xs  text-white mr-1 mb-1"
      style={{...style, backgroundColor: stateColors[value]}}
    >
      {value}
    </span>
  );
};

export default Tag;
