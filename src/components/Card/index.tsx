import React from "react";
import Tag from "../Tag";
import {CardProps} from "./types";
import {DialogInfo} from "../DialogInfo";

const Card = ({character, onClick, isSelected, id}: CardProps) => {
  return (
    <div
      id={id}
      data-testid={id}
      style={{borderColor: isSelected ? "rgb(32 211 238)" : ""}}
      className={`flex flex-row rounded overflow-hidden shadow-lg bg-white border-4  cursor-pointer border-white hover:border-cyan-300`}
      onClick={() => onClick?.()}
    >
      <div className="relative flex flex-1">
        <img
          loading="lazy"
          src={character.image}
          alt={`${character.name}-img`}
          width={200}
          height={200}
        />
        <Tag
          value={character.status}
          style={{position: "absolute", bottom: 0, left: 10, opacity: 0.75}}
        />
      </div>
      <div className="px-3 py-1 flex flex-col justify-between flex-1">
        <div className="font-bold text-xs text-black">
          <p className="text-sm text-ellipsis overflow-hidden  max-w-[10ch] lg:max-w-[8ch] 2xl:max-w-[14ch] 3xl:max-w-full">
            {character.name}
          </p>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="font-bold text-xs text-black">
            <p className="text-xs md:text-sm max-w-[7ch] md:max-w-[10ch] lg:max-w-[7ch] 2xl:max-w-[10ch] text-ellipsis overflow-hidden">
              {character.species}
            </p>
          </div>
          <DialogInfo character={character} />
        </div>
      </div>
    </div>
  );
};

export default Card;
