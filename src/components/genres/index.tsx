"use client";

import React, { Fragment, useEffect, useState } from "react";
import { fetchData } from "../../lib/utils";

interface IGenresProps {
  type?: string;
  genreIds?: number[];
  genres?: any;
}

export default function Genres({ type, genreIds, genres }: IGenresProps) {
  return (
    <Fragment>
      {genreIds
        ? genreIds?.map((g: any) => {
            return (
              <div
                key={g}
                className="text-[10px] rounded-full px-2 md:rounded-none md:text-base text-white bg-slate-900 md:py-1 md:px-4 font-extralight"
              >
                {genres[g]}
              </div>
            );
          })
        : genres?.map((el: any, idx: number) => (
            <div
              key={idx}
              className="text-xs md:text-sm text-white bg-cyan-900 py-1 px-4 font-extralight rounded-full tracking-wider"
            >
              {el.name}
            </div>
          ))}
    </Fragment>
  );
}
