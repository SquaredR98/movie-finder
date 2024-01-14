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
  type?: string;
  animate: boolean;
  genres: Record<string, string>[]
}

export default function MovieCard({
  hoveredOnCard,
  index,
  item,
  href,
  type,
  animate,
  genres
}: IMovieCardProps) {
  const [hoverOnCard, sethoverOnCard] = useState(-1);
  const poster = "https://image.tmdb.org/t/p/original";
  const posterUrl = item.poster_path
    ? poster + item.poster_path
    : "/no-poster.png";

  return (
    <MotionLink
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.25, duration: 0.5, ease: "easeInOut" }}
      href={`/${item.media_type || type}/${item.id}`}
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
          {(hoveredOnCard
            ? hoveredOnCard === index
            : hoverOnCard === index) && (
            <MotionDiv
              variants={{
                hidden: { opacity: 0, height: 0 },
                visible: { opacity: 1, height: '100%' },
                exit: { opacity: 0, height: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{
                delay: 0,
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="absolute left-0 bottom-0 right-0 bg-slate-950/90"
            >
              <div className="h-[100%] flex flex-col items-center justify-center">
                <h1
                  className={`text-3xl font-bold text-center ${gradientText} no-wrap`}
                >
                  {item.name || item.title}
                </h1>
                <div className="flex gap-2 flex-wrap justify-center mt-2">
                  <Genres type={type} genreIds={item?.genre_ids} genres={genres} />
                </div>
              </div>
            </MotionDiv>
          )}
        </CardContent>
      </Card>
    </MotionLink>
  );
}
