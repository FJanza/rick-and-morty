"use client";
import React from "react";
import RickCrash from "../../public/rick-and-morty-crash.gif";

export default function NotFound() {
  console.log("first");
  return (
    <div className="flex vh-100 justify-center w-dvw pt-10">
      <div className="border-2 border-white rounded-lg">
        <h2 className="bg-[#7D988F] p-3 font-bold text-xl rounded-t-lg">
          Sorry, Something went wrong!
        </h2>
        <img src={RickCrash.src} width={900} className="rounded-b-lg" />
      </div>
    </div>
  );
}
