"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { fetchData } from "../../lib/utils";

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
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <Image
            src={backgroundImage}
            alt="hero-image"
            fill
            objectFit="cover"
            className="w-full"
          />
        </div>
      )}
      <div className="bg-gradient-to-b from-slate-950/0 to-slate-950 h-[250px] absolute bottom-0 left-0 w-full" />
    </div>
  );
}
