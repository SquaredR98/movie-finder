import React from "react";
import { flexibleContainer } from "@/lib/utils";
import ExploreContent from "../../sections/explore-content";
import { fetchGenres } from "../page";

interface IExploreMoviePageProps {
  params: { type: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function ExploreMoviePage({
  params: { type },
  searchParams
}: IExploreMoviePageProps) {
  const genres = await fetchGenres();
  return (
    <div className={`${flexibleContainer}`}>
      <ExploreContent type={type} searchParams={searchParams} genres={genres} />
    </div>
  );
}
