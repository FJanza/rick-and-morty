import React, {useEffect, useState} from "react";
import {EpisodeListProps} from "./types";
import {Episode} from "@/Types/character";
import {getDataFromUrl} from "@/service/service";
import EpisodesColumn from "../EpisodesColumn";

const EpisodesList = ({
  chLeft,
  chEpLeft,
  chRight,
  chEpRight,
}: EpisodeListProps) => {
  const [epInfoLeft, setEpInfoLeft] = useState<Episode[]>([]);
  const [epInfoRight, setEpInfoRight] = useState<Episode[]>([]);
  const [epOfTwoCh, setEpOfTwoCh] = useState<Episode[]>([]);

  const getEpisodes = async (ch: "left" | "right", urls?: string[]) => {
    setEpInfoLeft([]);
    setEpInfoRight([]);
    if (urls) {
      urls.map(async (url) => {
        const data = await getDataFromUrl(url);

        if (ch === "left") {
          setEpInfoLeft((prev) => {
            return [...prev, data];
          });
        } else if (ch === "right") {
          setEpInfoRight((prev) => {
            return [...prev, data];
          });
        }
      });
    }
  };

  const getEpisodesOfTwoCh = async (urls?: string[]) => {
    setEpOfTwoCh([]);
    if (urls) {
      const repetidos = urls.reduce((acc: {[key: string]: number}, el) => {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
      }, {});

      const soloRepetidos = Object.keys(repetidos).filter(
        (key) => repetidos[key] > 1
      );

      soloRepetidos.map(async (url) => {
        const data = await getDataFromUrl(url);
        setEpOfTwoCh((prev) => {
          return [...prev, data];
        });
      });
    }
  };

  useEffect(() => {
    getEpisodes("right", chEpRight);
    getEpisodes("left", chEpLeft);
    const epsR = chEpRight ? [...chEpRight] : [];
    const epsL = chEpLeft ? [...chEpLeft] : [];
    getEpisodesOfTwoCh([...epsR, ...epsL]);
  }, [chEpLeft, chEpRight]);

  return (
    <div className="grid grid-cols-3 gap-4 p-2" id="episodes-lists">
      <EpisodesColumn
        name={chLeft ?? ""}
        episodes={epInfoLeft}
        id="episodes-list-character-left"
      />
      <EpisodesColumn
        name={`${chLeft ?? ""}${chLeft && chRight && " & "}${chRight ?? ""}`}
        episodes={epOfTwoCh}
        id="episodes-list-both-character"
      />
      <EpisodesColumn
        name={chRight ?? ""}
        episodes={epInfoRight}
        id="episodes-list-character-right"
      />
    </div>
  );
};

export default EpisodesList;
