import React from "react";
import {LocationCardProps} from "./types";
import {Home, MapPin} from "lucide-react";

const LocationCard = ({location, title}: LocationCardProps) => {
  return (
    <div className="flex flex-col flex-1 items-center gap-2 h-full">
      <div className="flex flex-row justify-start gap-1 w-full text-green-800">
        {title === "Origin" ? (
          <Home className="w-5 h-5" />
        ) : (
          <MapPin className="w-5 h-5" />
        )}
        <h2 className="font-semibold" data-testid={`${title}-title`}>
          {title}
        </h2>
      </div>
      <div className="bg-white/50 w-full justify-start flex h-full rounded-lg px-2 py-1">
        {location ? (
          <ul className="text-sm space-y-2 py-2">
            <li className="text-black flex flex-row gap-1">
              <span className="font-semibold">Name:</span>
              <span>{location?.name}</span>
            </li>
            <li className="text-black flex flex-row gap-1">
              <span className="font-semibold">Type:</span>
              <span>{location?.type}</span>
            </li>
            <li className="text-black flex flex-row gap-1">
              <span className="font-semibold">Dimension:</span>
              <span>{location?.dimension}</span>
            </li>
          </ul>
        ) : (
          <div className="w-full justify-center flex">
            <img
              src="/censored.svg"
              className="-rotate-45 w-full h-auto max-w-28 "
              alt="censored"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationCard;
