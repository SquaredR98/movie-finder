"use client";
import { useInView } from "react-intersection-observer";
import React, { Fragment, useEffect, useState } from "react";
import { fetchData } from "../../lib/utils";
import MovieCard from "../../components/movie-card";

interface ILoadMoreProps {
  type: string;
  genres: any;
}

export default function LoadMore({ type, genres }: ILoadMoreProps) {
  const [data, setData] = useState<any>([]);
  const { ref, inView } = useInView();
  let page = 2;

  useEffect(() => {
    if (inView) {
      const fetchNextData = async () => {
        const newData = await fetchData(`/discover/${type}?page=${page}`);
        setData(newData);
        page++;
      };
      fetchNextData();
    }
  }, [inView, data, page, type]);
  return (
    <Fragment>
      {data?.results?.map((item: any, idx: number) => {
        return (
          <MovieCard
            key={idx}
            item={item}
            index={idx}
            href=""
            animate={true}
            type={type}
            genres={genres}
          />
        );
      })}
      <div ref={ref}>
        <svg
          className="animate-spin h-5 w-5 mr-3 ..."
          viewBox="0 0 24 24"
        ></svg>
      </div>
    </Fragment>
  );
}
