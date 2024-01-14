import React from "react";
import { flexibleContainer } from "@/lib/utils";
import ExploreContent from "../../sections/explore-content";

interface IExploreMoviePageProps {
  params: { type: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function ExploreMoviePage({
  params: { type },
  searchParams
}: IExploreMoviePageProps) {
  return (
    <div className={`${flexibleContainer}`}>
      <ExploreContent type={type} searchParams={searchParams} />
    </div>
  );
}
