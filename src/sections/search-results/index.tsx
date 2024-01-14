import React from "react";
import MovieCard from "../../components/movie-card";

interface ISearchResultsProps {
  data: any;
  genres: any;
}

export default function SearchResults({ data, genres }: ISearchResultsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-8">
      {data?.results?.map((item: any, idx: number) => {
        return (
          <MovieCard
            item={item}
            index={idx}
            href=""
            animate={true}
            genres={genres}
          />
        );
      })}
    </div>
  );
}
