import { string } from "prop-types";
import React, { Fragment } from "react";
import { fetchData, flexibleContainer } from "../../../lib/utils";
import Image from "next/image";

interface IMovieOrShowContentProps {
  params: {
    type: string;
    id: string;
  };
}

async function fetchMovieOrShowData(type: string, id: string) {
  return await fetchData(`/${type}/${id}`);
}

export default async function MovieOrShowContent({
  params: { type, id },
}: IMovieOrShowContentProps) {
  const data = await fetchMovieOrShowData(type, id);
  const url = "https://image.tmdb.org/t/p/original";
  return (
    <Fragment>
      <Image
        src={url + data?.backdrop_path}
        fill
        alt="movie poster"
        className="opacity-10 absolute top-0 left-0 right-0 -z-[1]"
      />
      <div className={`${flexibleContainer} pt-16`}>
        <div className="grid grid-cols-3 gap-8 my-8">
          <div className="h-96">
            <Image
              src={url + data?.poster_path}
              height={1000}
              width={800}
              alt="movie poster"
              className="h-[500px] w-full object-cover"
            />
          </div>
          <div className="col-span-2">
            <h2 className="text-white text-5xl font-bold">{data?.name || data?.title}</h2>
            <div>
              <h4 className="text-white text-3xl">Overview</h4>
              <p className="text-white">{data?.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
