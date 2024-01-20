import React from "react";
import { fetchGenres, flexibleContainer } from "@/lib/utils";
import ExploreContent from "../../sections/explore-content";

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
