import HeroSection from "@/sections/hero-section";
import CarouselSection from "../sections/carousel";
import { fetchData, fetchGenres } from "../lib/utils";
import Skeleton from "../components/skeleton";

const daySelection = [
  {
    name: "Day",
    key: "day",
  },
  {
    name: "Week",
    key: "week",
  },
];
const movieSelection = [
  {
    name: "Movies",
    key: "movie",
  },
  {
    name: "TV Shows",
    key: "tv",
  },
];

export default async function Home() {
  const genres = await fetchGenres();
  return (
    <main>
      <HeroSection />
      <CarouselSection title="Trending" selections={daySelection} genres={genres} />
      <CarouselSection title="Popular" selections={movieSelection} genres={genres} />
      <CarouselSection title="Top Rated" selections={movieSelection} genres={genres} />
    </main>
  );
}
