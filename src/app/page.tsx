import Card from "@/components/Card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Card
        name="Rick"
        img="https://rickandmortyapi.com/api/character/avatar/361.jpeg"
        state="Alive"
      />
    </div>
  );
}
