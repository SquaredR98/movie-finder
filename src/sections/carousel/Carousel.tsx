import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import MovieCard from "@/components/movie-card";

interface ICustomCarouselProps {
  moviesData: any;
  setHoveredOnCard: any;
  hoveredOnCard: number;
}

export default function CustomCarousel({
  moviesData,
  setHoveredOnCard,
  hoveredOnCard,
}: ICustomCarouselProps) {
  return (
    <Carousel className="my-8">
      <CarouselContent>
        {moviesData?.results?.map((item: any, index: number) => {
          return (
            <CarouselItem
              key={index}
              className="md:basis-1/3 lg:basis-1/5"
              onMouseEnter={() => setHoveredOnCard(index)}
              onMouseLeave={() => setHoveredOnCard(-1)}
            >
              <MovieCard
                hoveredOnCard={hoveredOnCard}
                index={index}
                item={item}
                href=""
                animate={false}
                type={item.media_type}
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="hidden md:block" />
      <CarouselNext className="hidden md:block" />
    </Carousel>
  );
}
