import HeroSection from "@/sections/hero-section";
import CarouselSection from "../sections/carousel";
import { fetchData } from "../lib/utils";

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

export async function fetchGenres() {
  const types = ["movie", "tv"],
    promises: any = [],
    allGenres: any = {};
  types.forEach((type) => promises.push(fetchData(`/genre/${type}/list`)));
  const data = await Promise.all(promises);
  console.log(data);
  
  data.map(({ genres }: any) => {
    genres.map((item: any) => (allGenres[item.id] = item.name));
  });

  return allGenres;
}

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
