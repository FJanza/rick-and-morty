"use client";
import CharacterSelector from "@/components/CharacterSelector";
import EpisodesList from "@/components/EpisodesList";
import {Character} from "@/Types/character";
import {useState} from "react";

export default function Home() {
  const [CharacterLeft, setCharacterLeft] = useState<Character | undefined>();
  const [CharacterRight, setCharacterRight] = useState<Character | undefined>();

  return (
    <div className="p-1 sm:p-3 max-h-dvh">
      <div className="flex flex-row justify-between ">
        <CharacterSelector
          title="Character 1"
          onChange={(ch) => {
            setCharacterLeft((prev) => (prev === ch ? undefined : ch));
          }}
        />
        <CharacterSelector
          title="Character 2"
          onChange={(ch) => {
            setCharacterRight((prev) => (prev === ch ? undefined : ch));
          }}
        />
      </div>
      <div className="h-full">
        <EpisodesList
          chLeft={CharacterLeft?.name}
          chRight={CharacterRight?.name}
          chEpLeft={CharacterLeft?.episode}
          chEpRight={CharacterRight?.episode}
        />
      </div>
    </div>
  );
}
