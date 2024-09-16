import {Character} from "@/Types/character";

export interface CharacterSelectorProps {
  onChange: (ch: Character) => void;
  title: string;
}
