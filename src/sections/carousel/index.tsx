"use client";

import React, { useEffect, useState } from "react";
import { fetchData, flexibleContainer, gradientText } from "@/lib/utils";

import CustomCarousel from "./Carousel";
import CarouselSelect from "./CarouselSelect";

interface ICarouselSectionProps {
  title: string;
  selections: ISelection[];
  genres: Record<string, string>[]
}

export interface ISelection {
  name: string;
  key: string;
}

export default function CarouselSection({
  title,
  selections,
  genres,
}: ICarouselSectionProps) {
  const [selection, setSelection] = useState(selections[0].key);
  const [moviesData, setMoviesData] = useState<any>({});
  const [hoveredOnCard, setHoveredOnCard] = useState<number>(-1);

  const [endpoint, setEndpoint] = useState(
    title === "Trending"
      ? `/trending/movie/${selection}`
      : title === "Popular"
      ? `/${selection}/popular`
      : `/${selection}/top_rated`
  );
  useEffect(() => {
    function updateEndpoint() {
      if (title === "Trending") {
        setEndpoint(`/trending/movie/${selection}`);
      } else if (title === "Popular") {
        setEndpoint(`/${selection}/popular`);
      } else {
        setEndpoint(`/${selection}/top_rated`);
      }
    }

    updateEndpoint();
  }, [title, selection]);

  useEffect(() => {
    async function fetchMovieData() {
      const data = await fetchData(endpoint);
      setMoviesData(data);
    }
    fetchMovieData();
  }, [endpoint]);

  return (
    <div className={`${flexibleContainer} my-8`}>
      <div className="flex justify-between">
        <h3 className={`text-4xl ${gradientText} font-bold`}>{title}</h3>
        <CarouselSelect setSelection={setSelection} selections={selections} />
      </div>
      <CustomCarousel
        type={selection}
        moviesData={moviesData}
        setHoveredOnCard={setHoveredOnCard}
        hoveredOnCard={hoveredOnCard}
        genres={genres}
      />
    </div>
  );
}
