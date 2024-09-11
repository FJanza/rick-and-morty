import React from "react";
import Tag from "../Tag";
import {CardProps} from "./types";

const Card = ({img, name, state}: CardProps) => {
  return (
    <div className="max-w-64 rounded overflow-hidden shadow-lg bg-white border-2 group">
      <div className="relative">
        <img className="w-72" src={img} alt={`${name}-img`} />
        <Tag
          state={state}
          style={{position: "absolute", bottom: 0, right: 10}}
        />
      </div>
      <div className="px-3 py-2">
        <div className="font-bold text-xl mb-2 text-black">{name}</div>
      </div>
    </div>
  );
};

export default Card;
