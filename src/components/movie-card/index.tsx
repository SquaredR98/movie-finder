"use client";

import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { MotionDiv, MotionLink } from "../motion-elements";
import { gradientText } from "../../lib/utils";
import Genres from "../genres";

interface IMovieCardProps {
  hoveredOnCard?: number;
  index: number;
  item: any;
  href: string;
  type: string;
  animate: boolean;
}

export default function MovieCard({
  hoveredOnCard,
  index,
  item,
  href,
  type,
  animate,
}: IMovieCardProps) {
  const [hoverOnCard, sethoverOnCard] = useState(-1);
  const poster = "https://image.tmdb.org/t/p/original";
  const posterUrl = item.poster_path
    ? poster + item.poster_path
    : "/no-poster.png";
    console.log(type);
    
  return (
    <MotionLink
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.25, duration: 0.5, ease: "easeInOut" }}
      href={`/${item.type || type}/${item.id}`}
      onMouseEnter={hoveredOnCard ? () => {} : () => sethoverOnCard(index)}
      onMouseLeave={hoveredOnCard ? () => {} : () => sethoverOnCard(-1)}
    >
      <Card className="h-[320px] rounded-none border-none">
        <CardContent className="flex items-center justify-center relative h-[100%]">
          <Image
            src={posterUrl}
            alt="movie poster"
            fill
            objectFit="cover"
            className="w-full absolute"
            sizes="100%"
          />
          {(hoveredOnCard || hoverOnCard) === index && (
            <MotionDiv
              variants={{
                hidden: { zoom: 1.5, opacity: 0 },
                visible: { zoom: 1, opacity: 1 },
                exit: { zoom: 1.5, opacity: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{
                delay: 0,
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="absolute top-0 left-0 bottom-0 right-0 bg-slate-950/90"
            >
              <div className="h-[100%] flex flex-col items-center justify-center">
                <h1
                  className={`text-3xl font-bold text-center ${gradientText} no-wrap`}
                >
                  {item.name || item.title}
                </h1>
                <div>
                  <Genres type={type} genreIds={[]} />
                </div>
              </div>
            </MotionDiv>
          )}
        </CardContent>
      </Card>
    </MotionLink>
  );
}
