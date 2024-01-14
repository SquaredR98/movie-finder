import React from "react";
import { fetchData, flexibleContainer, gradientText } from "../../lib/utils";
import { fetchGenres } from "../page";
import SearchResults from "../../sections/search-results";

interface ISearchResultsProps {
  params: string;
  searchParams: any;
}

export async function fetchSearchedQuery(value: string) {
  const data = fetchData(`/search/multi?query=${value}&page=${1}`);
  return data;
}

export default async function SearchResult({
  params,
  searchParams,
}: ISearchResultsProps) {
  const data = await fetchSearchedQuery(searchParams.query);
  const genres = await fetchGenres();
  
  return (
    <div className={`${flexibleContainer} pt-16`}>
      <h3 className={`mt-8 text-3xl ${gradientText} mb-8`}>Search Results for "{searchParams.query}"</h3>
      <SearchResults data={data} genres={genres} />
    </div>
  );
}
