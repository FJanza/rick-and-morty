import {Gender, Status} from "@/Types/character";

export interface TagProps {
  value: Status | Gender;
  style?: React.CSSProperties;
}
