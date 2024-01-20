import React, { Fragment } from "react";
import { fetchData, flexibleContainer } from "../../../lib/utils";
import Image from "next/image";
import dayjs from "dayjs";
import Genres from "../../../components/genres";
import CircularRating from "../../../components/circular-progressbar";

interface IMovieOrShowContentProps {
  params: {
    type: string;
    id: string;
  };
}

async function fetchMovieOrShowData(type: string, id: string) {
  return await fetchData(`/${type}/${id}`);
}

async function fetchCrew(type: string, id: string) {
  return await fetchData(`/${type}/${id}/credits`);
}

const convertToHoursAndMinutes = (totalMinutes: number) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
};

export default async function MovieOrShowContent({
  params: { type, id },
}: IMovieOrShowContentProps) {
  const data = await fetchMovieOrShowData(type, id);
  const { crew, cast } = await fetchCrew(type, id);
  const url = "https://image.tmdb.org/t/p/original";

  const director = crew?.filter((f: any) => f.job === "Director");
  const writer = crew?.filter(
    (f: any) =>
      f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
  );

  return (
    <Fragment>
      <Image
        src={url + data?.backdrop_path}
        fill
        alt="movie poster"
        className="opacity-10 absolute top-0 left-0 right-0 -z-[1] object-cover"
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
            <h2 className="text-white text-5xl font-bold">
              {data?.name || data?.title} (
              {dayjs(data?.release_date).format("YYYY")})
            </h2>
            <div className="flex gap-x-2 my-2">
              <Genres genres={data?.genres} />
            </div>
            <div className="my-8">
              <div className="w-16 h-16 bg-slate-900 rounded-full">
                <CircularRating data={data} />
              </div>
            </div>
            <div>
              <h4 className="text-white text-3xl">Overview</h4>
              <p className="text-white font-extralight my-2">
                {data?.overview}
              </p>
            </div>
            <div className="flex flex-col gap-y-2 mt-10">
              <div className="flex text-white gap-x-4 text-xl border-b pb-2 border-slate-600">
                <p>
                  <span className="font-bold text-slate-400">Status: </span>
                  {data?.status}
                </p>
                <p>
                  <span className="font-bold text-slate-400">
                    Release Data:{" "}
                  </span>
                  {dayjs(data?.release_date).format("MMM D, YYYY")}
                </p>
                <p>
                  <span className="font-bold text-slate-400">Runtime: </span>
                  {convertToHoursAndMinutes(data?.runtime)}
                </p>
              </div>
              <div className="border-b pb-2 border-slate-600">
                {director?.length > 0 && (
                  <div className="text-xl text-white">
                    <span className="font-bold text-slate-400">Director: </span>
                    <span className="">
                      {director?.map((d: any, i: number) => (
                        <span key={i}>
                          {d.name}
                          {director.length - 1 !== i && ", "}
                        </span>
                      ))}
                    </span>
                  </div>
                )}
              </div>
              <div className="border-b pb-2 border-slate-600">
                {writer?.length > 0 && (
                  <div className="text-xl text-white">
                    <span className="font-bold text-slate-400">Writer: </span>
                    <span className="">
                      {writer?.map((d: any, i: number) => (
                        <span key={i}>
                          {d.name}
                          {writer.length - 1 !== i && ", "}
                        </span>
                      ))}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
