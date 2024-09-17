import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {MoreHorizontalIcon} from "lucide-react";
import {DialogInfoProps} from "./types";
import {useEffect, useState} from "react";
import {getDataFromUrl} from "@/service/service";
import {Location} from "@/Types/character";
import Tag from "../Tag";
import LocationCard from "../LocationCard";
import {Description} from "@radix-ui/react-alert-dialog";

export const DialogInfo = ({character}: DialogInfoProps) => {
  const [origin, setOrigin] = useState<Location | undefined>();
  const [location, setLocation] = useState<Location | undefined>();

  useEffect(() => {
    const getLocation = async () => {
      setOrigin(
        character.origin.url
          ? await getDataFromUrl(character.origin.url)
          : undefined
      );
      setLocation(
        character.location.url
          ? await getDataFromUrl(character.location.url)
          : undefined
      );
    };
    getLocation();
  }, []);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <MoreHorizontalIcon
          color="black"
          className="bg-slate-400 rounded-full p-1 hover:bg-slate-500 absolute bottom-2 right-2 cursor-pointer"
          role="open-button"
        />
      </AlertDialogTrigger>
      <AlertDialogContent
        className="bg-gradient-to-br from-green-100  to-emerald-600  border-0"
        aria-describedby={"content-description"}
        aria-labelledby="dialog-title"
      >
        <AlertDialogTitle>
          <div className="flex flex-row justify-between gap-3">
            <img
              src={character.image}
              width={200}
              height={200}
              className="flex-1 rounded-sm border-green-200 border-2"
            />
            <div className="flex flex-col items-start" style={{flex: 3}}>
              <h3 className="font-bold text-3xl text-green-800 flex-1">
                {character.name}
              </h3>
              <h3 className="text-lg font-semibold text-green-700 flex-1">
                Species: {character.species}
              </h3>
              {character.type && (
                <h3 className="text-md font-semibold text-green-700 flex-1">
                  Subspecies: {character.type}
                </h3>
              )}
              <div className="flex flex-row justify-start gap-2 w-full flex-1 items-end">
                <Tag value={character.status} />
                <Tag value={character.gender} />
              </div>
            </div>
          </div>
        </AlertDialogTitle>
        <Description></Description>
        <div
          className="flex flex-row justify-between gap-3"
          id="content-description"
        >
          <LocationCard location={origin} title="Origin" />
          <LocationCard location={location} title="Last Location" />
        </div>

        <AlertDialogFooter>
          <AlertDialogAction role={"button"}>Close</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
