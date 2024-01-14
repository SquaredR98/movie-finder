import React, { useState } from "react";
import { fetchData } from "../../lib/utils";
import MovieCard from "../../components/movie-card";
import { useSearchParams } from "next/navigation";
import LoadMore from "./LoadMore";

interface IInitialListProps {
  type: string;
  filters: Record<string, any> | {};
  genres: Record<string, string>[]
}

export async function fetchMovieData(type: string, filters: any) {
  const data = await fetchData(`/discover/${type}`, filters);
  return data;
}

export default async function InitialList({
  type,
  filters,
  genres,
}: IInitialListProps) {  
  const data = await fetchMovieData(type, filters);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-8">
      {data?.results?.map((item: any, idx: number) => {
        return <MovieCard item={item} index={idx} href="" animate={true} type={type} genres={genres} />;
      })}
      <LoadMore type={type} genres={genres} />
    </div>
  );
}
