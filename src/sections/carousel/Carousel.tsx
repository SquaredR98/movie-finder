import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import MovieCard from "@/components/movie-card";
import Skeleton from "../../components/skeleton";

interface ICustomCarouselProps {
  moviesData: any;
  setHoveredOnCard: any;
  hoveredOnCard: number;
  type: string;
  genres: Record<string, string>[];
}

export default function CustomCarousel({
  moviesData,
  setHoveredOnCard,
  hoveredOnCard,
  type,
  genres,
}: ICustomCarouselProps) {
  return (
    <Carousel className="my-8">
      {moviesData ? (
        <CarouselContent>
          {moviesData?.results?.map((item: any, index: number) => {
            return (
              <CarouselItem
                key={index}
                className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                onMouseEnter={() => setHoveredOnCard(index)}
                onMouseLeave={() => setHoveredOnCard(-1)}
              >
                <MovieCard
                  hoveredOnCard={hoveredOnCard}
                  index={index}
                  item={item}
                  href=""
                  animate={false}
                  type={item.media_type || type}
                  genres={genres}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      ) : (
        <CarouselContent>
          {Array({ length: 5 }).map((_, index: number) => {
            return (
              <CarouselItem
                key={index}
                className="basis-1/2 md:basis-1/3 lg:basis-1/5"
              >
                <Skeleton />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      )}
      {moviesData && <CarouselPrevious className="hidden md:flex" />}
      {moviesData && <CarouselNext className="hidden md:flex" />}
    </Carousel>
  );
}
