import React from "react";
import { flexibleContainer, gradientText } from "../../lib/utils";
import ExploreSelect from "./ExploreSelect";
import InitialList from "./InitialList";
import LoadMore from "./LoadMore";

interface IExploreContentProps {
  type: string;
  searchParams: Record<string, any> | undefined;
  genres: Record<string, string>[]
}

export default function ExploreContent({
  type,
  searchParams,
  genres,
}: IExploreContentProps) {
  type = type === "movies" ? "movie" : "tv";
  return (
    <div className="pt-16">
      <div className="mt-8 flex justify-between">
        <h2 className={`text-3xl font-bold ${gradientText}`}>
          Explore {type === "movie" ? "Movies" : "TV Shows"}
        </h2>
        <ExploreSelect type={type} />
      </div>
      <div className={`mt-8`}>
        <InitialList type={type} filters={searchParams || {}} genres={genres} />
      </div>
    </div>
  );
}
