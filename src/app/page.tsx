"use client";
import {useEffect, useState} from "react";
import CharacterSelector from "@/components/CharacterSelector";
import EpisodesList from "@/components/EpisodesList";
import {Character} from "@/Types/character";
import {driver} from "driver.js";
import "driver.js/dist/driver.css";
import MeeseeksBox from "../../public/Mr_Meeseeks_Box.webp";
import PressedMeeseeksBox from "../../public/Pressed_Mr_Meeseeks_Box.webp";
import Meeseek from "../../public/Mr_Meeseeks_arm_up.webp";
import OpenMouthMeeseek from "../../public/Mouth_Open_Mr_Meeseeks_arm_up.webp";
import {Button} from "@/components/ui/button";

export default function Home() {
  const driverObj = driver({
    allowClose: false,
    showProgress: true,
    steps: [
      {
        element: "#character-selector-Character1",
        popover: {
          title: "This is the Character Selector",
          description: "Here you can choose the character you want to compare.",
          side: "left",
          align: "start",
        },
      },
      {
        element: "#button-left-ch",
        popover: {
          title: "Previous Button",
          description: "This button will take you back to the previous page.",
          side: "left",
          align: "end",
        },
      },
      {
        element: "#button-right-ch",
        popover: {
          title: "Next Button",
          description: "This button will take you back to the next page.",
          side: "left",
          align: "end",
        },
      },
      {
        element: "#Character1-0",
        popover: {
          title: "Character",
          description:
            "Here you can see a little information about the character you are looking for.",
          side: "left",
          align: "end",
        },
      },
      {
        element: "#moreInfoButton",
        popover: {
          title: "Extra info",
          description:
            "When you click here you will be able to see additional information about the character.",
          side: "left",
          align: "end",
        },
      },
    ],
  });

  const [CharacterLeft, setCharacterLeft] = useState<Character | undefined>();
  const [CharacterRight, setCharacterRight] = useState<Character | undefined>();

  const [boxPressed, setBoxPressed] = useState(false);

  const [timeUpMeesekAnimation, setTimeUpMeesekAnimation] = useState(false);
  const [startTour, setStartTour] = useState(false);

  useEffect(() => {
    if (boxPressed) {
      const timer = setTimeout(() => {
        setTimeUpMeesekAnimation(true);
      }, 300); // 3000ms = 3 segundos

      // Limpiar el timer cuando el componente se desmonte
      return () => clearTimeout(timer);
    }
  }, [boxPressed]);

  return (
    <div className="p-1 sm:p-3 max-h-dvh relative">
      <div
        className="flex flex-row justify-between "
        id="box-character-selectors"
      >
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
      {!(boxPressed && timeUpMeesekAnimation) && !startTour && (
        <img
          src={boxPressed ? PressedMeeseeksBox.src : MeeseeksBox.src}
          width={100}
          height={100}
          onClick={() => {
            setBoxPressed((prev) => !prev);
          }}
          className="hidden lg:block absolute z-20  bottom-2 right-7"
        />
      )}
      {boxPressed && (
        <div className="absolute top-0 left-0 w-dvw h-dvh backdrop-blur-sm z-10" />
      )}
      <div
        className="absolute bottom-4 right-20 z-20"
        style={{display: boxPressed ? "block" : "none"}}
      >
        <div
          className="absolute bg-white text-black p-3 rounded -left-56 -top-3 font-semibold text-xl triangle-after"
          style={{display: !timeUpMeesekAnimation ? "none" : "block"}}
        >
          <p>Let's begin your tour of the web!</p>
          <Button
            onClick={() => {
              setBoxPressed(false);
              setStartTour(true);
              driverObj.drive();
            }}
          >
            Go!
          </Button>
        </div>
        <img
          style={{display: !timeUpMeesekAnimation ? "none" : "block"}}
          src={OpenMouthMeeseek.src}
          width={250}
        />
        <img
          style={{display: timeUpMeesekAnimation ? "none" : "block"}}
          src={Meeseek.src}
          width={250}
        />
      </div>
    </div>
  );
}
