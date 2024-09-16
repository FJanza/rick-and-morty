import {Character, Status} from "@/Types/character";

export interface CardProps {
  id: string;
  character: Character;
  onClick?: VoidFunction;
  onClickIcon?: VoidFunction;
  isSelected?: boolean;
}
