import HeroSection from "@/sections/hero-section";
import CarouselSection from "../sections/carousel";

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

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CarouselSection title="Trending" selections={daySelection} />
      <CarouselSection title="Popular" selections={movieSelection} />
      <CarouselSection title="Top Rated" selections={movieSelection} />
    </main>
  );
}
