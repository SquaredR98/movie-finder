import React from "react";
import { fetchGenres, fetchSearchedQuery, flexibleContainer, gradientText } from "../../lib/utils";
import SearchResults from "../../sections/search-results";

interface ISearchResultsProps {
  params: string;
  searchParams: any;
}



export default async function SearchResult({
  params,
  searchParams,
}: ISearchResultsProps) {
  const data = await fetchSearchedQuery(searchParams.query);
  const genres = await fetchGenres();
  
  return (
    <div className={`${flexibleContainer} pt-16`}>
      <h3 className={`mt-8 text-3xl ${gradientText} mb-8`}>Search Results for &quot;{searchParams.query}&quot;</h3>
      <SearchResults data={data} genres={genres} />
    </div>
  );
}
