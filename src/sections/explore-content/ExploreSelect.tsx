"use client";

import React, { useEffect, useState } from "react";
import { fetchData } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

const sortbyData = [
  { value: "popularity.desc", label: "Popularity Descending" },
  { value: "popularity.asc", label: "Popularity Ascending" },
  { value: "vote_average.desc", label: "Rating Descending" },
  { value: "vote_average.asc", label: "Rating Ascending" },
  {
    value: "primary_release_date.desc",
    label: "Release Date Descending",
  },
  { value: "primary_release_date.asc", label: "Release Date Ascending" },
  { value: "original_title.asc", label: "Title (A-Z)" },
];

interface IExploreSelectProps {
  type: string;
}

interface IGeneres {
  id: number;
  name: string;
}

export default function ExploreSelect({ type }: IExploreSelectProps) {
  const [genres, setGenres] = useState<IGeneres[]>([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchGenres() {
      const data = await fetchData(`/genre/${type}/list`);
      setGenres(data.genres);
    }
    fetchGenres();
  }, [type]);

  function handleOnValueChange(value: string | number) {
    if (value === "clear") {
      router.push("?");
    } else if (genres.filter((el) => el.id === value).length > 0) {
      router.push(`?with_genres=${value}`);
    } else {
      router.push(`?sort_by=${value}`);
    }
  }

  return (
    <div>
      <Select
        onValueChange={(value) => {
          handleOnValueChange(value);
        }}
      >
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Filter Data" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Sort By</SelectLabel>
            {sortbyData.map(({ value, label }, idx: number) => (
              <SelectItem key={idx} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Genres</SelectLabel>
            {genres?.map(({ id, name }, idx: number) => (
              <SelectItem key={idx} value={id.toString()}>
                {name}
              </SelectItem>
            ))}
          </SelectGroup>
          <SelectItem value="clear">Clear</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
