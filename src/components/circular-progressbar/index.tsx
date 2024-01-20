"use client"

import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

export default function CircularRating({ data }: any) {
  return (
    <CircularProgressbar
    value={data?.vote_average.toFixed(1)}
    maxValue={10}
    text={data?.vote_average.toFixed(1)}
    styles={buildStyles({
      pathColor:
        data?.vote_average.toFixed(1) < 5
          ? "red"
          : data?.vote_average.toFixed(1) < 7
          ? "orange"
          : "green",
      trailColor: "black",
      textColor: "white",
      textSize: "3rem",
    })}
  />
  )
}
