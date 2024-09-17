import React from "react";
import {EpisodesColumnProps} from "./types";

const EpisodesColumn = ({name, episodes, id}: EpisodesColumnProps) => {
  return (
    <div
      className="flex flex-col bg-[rgba(20,20,20,0.8)] overflow-auto p-3 rounded-md "
      style={{maxHeight: "37dvh", scrollbarWidth: "none", height: "37dvh"}}
      id={id}
      data-testid={id}
    >
      <h3 className="font-semibold text-lg">
        {name && name + " - " + episodes?.length + " Episodes"}
      </h3>
      {episodes?.length > 0 ? (
        episodes.map((ep) => (
          <span key={ep.name}>
            {ep.episode} - {ep.name} - {ep.air_date}
          </span>
        ))
      ) : (
        <span>There are no episodes</span>
      )}
    </div>
  );
};

export default EpisodesColumn;
