"use client";

import React, { Fragment, useEffect, useState } from "react";
import { fetchData } from "../../lib/utils";

interface IGenresProps {
  type?: string;
  genreIds: number[];
  genres: any;
}

export default function Genres({ type, genreIds, genres }: IGenresProps) {
  return (
    <Fragment>
      {genreIds?.map((g: any) => {
        
        return (
          <div key={g} className="text-white bg-slate-900 py-1 px-4 font-extralight">
            {genres[g]}
          </div>
        );
      })}
    </Fragment>
  );
}
