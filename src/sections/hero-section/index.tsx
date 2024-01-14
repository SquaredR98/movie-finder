"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { fetchData } from "../../lib/utils";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { fetchSearchedQuery } from "../../app/search/page";
import { submitForm } from "../../components/navbar/NavbarInput";

export default function HeroSection() {
  const [backgroundImage, setBackgroundImage] = useState("");
  const backdrop = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function setBackgroundImageApi() {
      const data = await fetchData("/movie/upcoming");
      const finalResultForBg = data?.results?.[Math.floor(Math.random() * 20)];
      const bg = backdrop + finalResultForBg?.backdrop_path;
      setBackgroundImage(bg);
    }
    setBackgroundImageApi();
  }, []);
  return (
    <div className="w-full h-[520px] md:h-screen relative">
      {backgroundImage && (
        <div className="absolute top-0 left-0 w-full h-full opacity-20 -z-20">
          <Image
            src={backgroundImage}
            alt="hero-image"
            fill
            objectFit="cover"
            className="w-full"
          />
        </div>
      )}
      <div className="bg-gradient-to-b from-slate-950/0 to-slate-950 h-[250px] absolute bottom-0 left-0 w-full -z-10" />
      <div className="flex justify-center items-center h-full">
        <form
          action={submitForm}
          className="w-11/12 md:w-2/3 lg:w-1/2 flex items-center h-16"
        >
          <Input className="h-full rounded-full rounded-tr-none rounded-br-none w-3/4 pl-6 outline-0" name="search-input" />
          <Button
            type="submit"
            className={`h-full rounded-full w-1/4 rounded-tl-none rounded-bl-none bg-gradient-to-r from-cyan-300 to-indigo-400 border-none text-2xl`}
          >
            Search
          </Button>
        </form>
      </div>
    </div>
  );
}
