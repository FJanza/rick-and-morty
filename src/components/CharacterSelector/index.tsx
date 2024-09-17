"use client";

import React, {useEffect, useState} from "react";
import {getCharactersPerPage} from "@/service/service";
import {Character, Info} from "@/Types/character";
import {Button} from "@/components/ui/button";
import Card from "../Card";
import {CharacterSelectorProps} from "./types";
import {ArrowLeft, ArrowRight} from "lucide-react";
import PortalGif from "../../../public/portal.gif";

const CharacterSelector = ({onChange, title}: CharacterSelectorProps) => {
  const [Characters, setCharacters] = useState<{
    info: Info;
    results: Character[];
  }>();

  const [selectedCharacter, setSelectedCharacter] = useState<Character>();
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);

  const getCharacters = async (pageNumber?: number | undefined) => {
    const {info, results} = await getCharactersPerPage(pageNumber);
    setCharacters({info, results});
    setLoading(false);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  useEffect(() => {
    getCharacters(page !== 0 ? page : undefined);
  }, [page]);

  return (
    <div
      className="flex flex-col px-1 sm:px-2 w-full"
      id={`character-selector-${title.replace(" ", "")}`}
    >
      {loading ? (
        <div
          className="flex justify-center items-center"
          style={{
            height: "56dvh",
          }}
        >
          <img src={PortalGif.src} width={500} height={500} alt="Portal" />
        </div>
      ) : (
        <>
          <div className="flex flex-col sm:flex-row justify-between bg-[rgba(20,20,20,0.8)] rounded-md px-4 py-2 items-center mb-2 animate-appear">
            <h1 className="font-semibold text-xl">{title}</h1>

            <div className="flex flex-row justify-between items-center gap-3">
              <a href={"#" + title + "-0"} id="button-left-ch">
                <Button
                  className="bg-[rgba(96,180,88,0.8)] hover:bg-[rgba(45,114,38,0.8)]"
                  disabled={!Characters?.info.prev}
                  onClick={() => {
                    setPage((prev) => {
                      return prev - 1 >= 0 ? prev - 1 : 0;
                    });
                  }}
                >
                  <ArrowLeft />
                </Button>
              </a>
              <span>
                {page} / {Characters ? Characters?.info.pages : 48}
              </span>
              <a href={"#" + title + "-0"} id="button-right-ch">
                <Button
                  className="bg-[rgba(96,180,88,0.8)] hover:bg-[rgba(45,114,38,0.8)]"
                  disabled={!Characters?.info.next}
                  onClick={() => {
                    setPage((prev) => {
                      const pages = Characters ? Characters?.info.pages : 48;
                      return prev + 1 <= pages ? prev + 1 : pages;
                    });
                  }}
                >
                  <ArrowRight />
                </Button>
              </a>
            </div>
          </div>
          <div
            style={{
              height: "50dvh",
            }}
            className="animate-appear"
          >
            <div
              className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3   gap-y-1 gap-x-1  relative overflow-auto"
              style={{
                maxHeight: "50dvh",
                scrollbarWidth: "none",
              }}
            >
              {Characters?.results.map((ch, i) => {
                return (
                  <Card
                    isSelected={ch === selectedCharacter}
                    key={ch.name + i}
                    id={`${title.replace(" ", "")}-` + i}
                    character={ch}
                    onClick={() => {
                      onChange(ch);
                      setSelectedCharacter((prev) =>
                        prev !== ch ? ch : undefined
                      );
                    }}
                  />
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CharacterSelector;
