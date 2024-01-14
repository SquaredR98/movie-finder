"use client";

import React, { useEffect, useState } from "react";
import { fetchData, flexibleContainer, gradientText } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "../../components/ui/card";
import Image from "next/image";
import { MotionDiv } from "../../components/motion-elements";
import Link from "next/link";

interface ICarouselSectionProps {
  title: string;
  selections: ISelection[];
}

interface ISelection {
  name: string;
  key: string;
}

export default function CarouselSection({
  title,
  selections,
}: ICarouselSectionProps) {
  const [selection, setSelection] = useState(selections[0].key);
  const [moviesData, setMoviesData] = useState<any>({});
  const [hoveredOnCard, setHoveredOnCard] = useState<number>(-1);

  const [endpoint, setEndpoint] = useState(
    title === "Trending"
      ? `/trending/movie/${selection}`
      : title === "Popular"
      ? `/${selection}/popular`
      : `/${selection}/top_rated`
  );
  useEffect(() => {
    function updateEndpoint() {
      if (title === "Trending") {
        setEndpoint(`/trending/movie/${selection}`);
      } else if (title === "Popular") {
        setEndpoint(`/${selection}/popular`);
      } else {
        setEndpoint(`/${selection}/top_rated`);
      }
    }

    updateEndpoint();
  }, [title, selection]);

  useEffect(() => {
    async function fetchMovieData() {
      const data = await fetchData(endpoint);
      setMoviesData(data);
    }
    fetchMovieData();
  }, [endpoint]);

  return (
    <div className={`${flexibleContainer} my-8`}>
      <div className="flex justify-between">
        <h3 className={`text-4xl ${gradientText} font-bold`}>{title}</h3>
        <Select onValueChange={(value: string) => setSelection(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue className="text-lg" placeholder={selections[0].name} />
          </SelectTrigger>
          <SelectContent className="bg-none">
            {selections.map(({ name, key }, idx) => (
              <SelectItem key={idx} className="text-base" value={key}>
                {name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Carousel className="my-8">
        <CarouselContent>
          {moviesData?.results?.map((item: any, index: number) => {
            const poster = "https://image.tmdb.org/t/p/original";
            const posterUrl = item.poster_path
              ? poster + item.poster_path
              : "/no-poster.png";
            return (
              <CarouselItem
                key={index}
                className="md:basis-1/3 lg:basis-1/5"
                onMouseEnter={() => setHoveredOnCard(index)}
                onMouseLeave={() => setHoveredOnCard(-1)}
              >
                <Link href="">
                  <Card className="h-[320px] rounded-none">
                    <CardContent className="flex items-center justify-center relative h-[100%]">
                      <Image
                        src={posterUrl}
                        alt="movie poster"
                        fill
                        objectFit="cover"
                        className="w-full absolute"
                      />
                      {hoveredOnCard === index && (
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
                              className={`text-3xl font-bold text-center ${gradientText}`}
                            >
                              {item.name || item.title}
                            </h1>
                          </div>
                        </MotionDiv>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="hidden md:block" />
        <CarouselNext className="hidden md:block" />
      </Carousel>
    </div>
  );
}

const movieData = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: "/rz8GGX5Id2hCW1KzAIY4xwbQw1w.jpg",
      id: 955916,
      title: "Lift",
      original_language: "en",
      original_title: "Lift",
      overview:
        "An international heist crew, led by Cyrus Whitaker, race to lift $500 million in gold from a passenger plane at 40,000 feet.",
      poster_path: "/46sp1Z9b2PPTgCMyA87g9aTLUXi.jpg",
      media_type: "movie",
      genre_ids: [28, 35, 80],
      popularity: 207.068,
      release_date: "2024-01-10",
      video: false,
      vote_average: 6.01,
      vote_count: 52,
    },
    {
      adult: false,
      backdrop_path: "/yl2GfeCaPoxChcGyM5p7vYp1CKS.jpg",
      id: 848187,
      title: "Role Play",
      original_language: "en",
      original_title: "Role Play",
      overview:
        "Emma has a wonderful husband and two kids in the suburbs of New Jersey – she also has a secret life as an assassin for hire – a secret that her husband David discovers when the couple decide to spice up their marriage with a little role play.",
      poster_path: "/7MhXiTmTl16LwXNPbWCmqxj7UxH.jpg",
      media_type: "movie",
      genre_ids: [28, 35, 10749],
      popularity: 37.352,
      release_date: "2024-01-04",
      video: false,
      vote_average: 6.4,
      vote_count: 31,
    },
    {
      adult: false,
      backdrop_path: "/f1AQhx6ZfGhPZFTVKgxG91PhEYc.jpg",
      id: 753342,
      title: "Napoleon",
      original_language: "en",
      original_title: "Napoleon",
      overview:
        "An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his wife, Josephine.",
      poster_path: "/jE5o7y9K6pZtWNNMEw3IdpHuncR.jpg",
      media_type: "movie",
      genre_ids: [36, 10752, 18],
      popularity: 1529.676,
      release_date: "2023-11-22",
      video: false,
      vote_average: 6.5,
      vote_count: 1053,
    },
    {
      adult: false,
      backdrop_path: "/5pVbh9gbaMdBBiZj3elZdq2v0lE.jpg",
      id: 1214314,
      title: "One More Shot",
      original_language: "en",
      original_title: "One More Shot",
      overview:
        "Following the attack on the black site in Poland, Navy SEAL Jake Harris is ordered to escort terrorist suspect Amin Mansur to Washington D.C. for interrogation. Before the prisoner transfer process is complete, though, the airport is attacked by a group of heavily armed, well-trained mercenaries.",
      poster_path: "/gdF3Q1Mcr2XvxLPStQSoQIO2cIj.jpg",
      media_type: "movie",
      genre_ids: [28, 53],
      popularity: 53.935,
      release_date: "2024-01-12",
      video: false,
      vote_average: 7.4,
      vote_count: 21,
    },
    {
      adult: false,
      backdrop_path: "/4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg",
      id: 866398,
      title: "The Beekeeper",
      original_language: "en",
      original_title: "The Beekeeper",
      overview:
        "One man’s campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as Beekeepers.",
      poster_path: "/A7EByudX0eOzlkQ2FIbogzyazm2.jpg",
      media_type: "movie",
      genre_ids: [28, 53],
      popularity: 562.045,
      release_date: "2024-01-10",
      video: false,
      vote_average: 7.458,
      vote_count: 36,
    },
    {
      adult: false,
      backdrop_path: "/jbg3Z7jsddtYas2lIjDc1ogy9Et.jpg",
      id: 1072876,
      title: "Self Reliance",
      original_language: "en",
      original_title: "Self Reliance",
      overview:
        "When a man is offered a million dollars to play a game in which hunters try to kill him, he thinks he has found the perfect loophole: they can only attack when he’s alone. His only problem is that none of his friends or family believe the game is real.",
      poster_path: "/4AH3S0xMEYW20KGI6CSPO1W70bo.jpg",
      media_type: "movie",
      genre_ids: [35],
      popularity: 22.809,
      release_date: "2024-01-03",
      video: false,
      vote_average: 5.1,
      vote_count: 9,
    },
    {
      adult: false,
      backdrop_path: "/vdpE5pjJVql5aD6pnzRqlFmgxXf.jpg",
      id: 906126,
      title: "Society of the Snow",
      original_language: "es",
      original_title: "La sociedad de la nieve",
      overview:
        "On October 13, 1972, Uruguayan Air Force Flight 571, chartered to take a rugby team to Chile, crashes into a glacier in the heart of the Andes.",
      poster_path: "/2e853FDVSIso600RqAMunPxiZjq.jpg",
      media_type: "movie",
      genre_ids: [18, 36],
      popularity: 1417.534,
      release_date: "2023-12-13",
      video: false,
      vote_average: 8.082,
      vote_count: 663,
    },
    {
      adult: false,
      backdrop_path: "/rVJfabCz1ViynQCEz54MRqdZig1.jpg",
      id: 1155089,
      title: "Justice League: Crisis on Infinite Earths Part One",
      original_language: "en",
      original_title: "Justice League: Crisis on Infinite Earths Part One",
      overview:
        "Death is coming. Worse than death: oblivion. Not just for our Earth, but for everyone, everywhere, in every universe! Against this ultimate destruction, the mysterious Monitor has gathered the greatest team of Super Heroes ever assembled. But what can the combined might of Superman, Wonder Woman, Batman, The Flash, Green Lantern and hundreds of Super Heroes from multiple Earths even do to save all of reality from an unstoppable antimatter armageddon?!",
      poster_path: "/zR6C66EDklgTPLHRSmmMt5878MR.jpg",
      media_type: "movie",
      genre_ids: [16, 878, 28],
      popularity: 145.855,
      release_date: "2024-01-09",
      video: false,
      vote_average: 7.918,
      vote_count: 61,
    },
    {
      adult: false,
      backdrop_path: "/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
      id: 872585,
      title: "Oppenheimer",
      original_language: "en",
      original_title: "Oppenheimer",
      overview:
        "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
      poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      media_type: "movie",
      genre_ids: [18, 36],
      popularity: 597.982,
      release_date: "2023-07-19",
      video: false,
      vote_average: 8.116,
      vote_count: 6072,
    },
    {
      adult: false,
      backdrop_path: "/vrpSBM5Zr2L15cFKhOwlKA8Ttyc.jpg",
      id: 1211957,
      title: "The Painter",
      original_language: "en",
      original_title: "The Painter",
      overview:
        "An ex-CIA operative is thrown back into a dangerous world when a mysterious woman from his past resurfaces. Now exposed and targeted by a relentless killer and a rogue black ops program, he must rely on skills he thought he left behind in a high-stakes game of survival.",
      poster_path: "/gqzlmjyBej9EJXuB6IsIT9LWqvV.jpg",
      media_type: "movie",
      genre_ids: [28, 53],
      popularity: 18.483,
      release_date: "2024-01-05",
      video: false,
      vote_average: 5.4,
      vote_count: 5,
    },
    {
      adult: false,
      backdrop_path: "/m3s0jyPGtluJ48kD0fUiPjXrRhr.jpg",
      id: 673593,
      title: "Mean Girls",
      original_language: "en",
      original_title: "Mean Girls",
      overview:
        "New student Cady Heron is welcomed into the top of the social food chain by the elite group of popular girls called ‘The Plastics,’ ruled by the conniving queen bee Regina George and her minions Gretchen and Karen. However, when Cady makes the major misstep of falling for Regina’s ex-boyfriend Aaron Samuels, she finds herself prey in Regina’s crosshairs. As Cady sets to take down the group’s apex predator with the help of her outcast friends Janis and Damian, she must learn how to stay true to herself while navigating the most cutthroat jungle of all: high school.",
      poster_path: "/fbbj3viSUDEGT1fFFMNpHP1iUjw.jpg",
      media_type: "movie",
      genre_ids: [35],
      popularity: 280.8,
      release_date: "2024-01-10",
      video: false,
      vote_average: 6.833,
      vote_count: 30,
    },
    {
      adult: false,
      backdrop_path: "/t5zCBSB5xMDKcDqe91qahCOUYVV.jpg",
      id: 507089,
      title: "Five Nights at Freddy's",
      original_language: "en",
      original_title: "Five Nights at Freddy's",
      overview:
        "Recently fired and desperate for work, a troubled young man named Mike agrees to take a position as a night security guard at an abandoned theme restaurant: Freddy Fazbear's Pizzeria. But he soon discovers that nothing at Freddy's is what it seems.",
      poster_path: "/7BpNtNfxuocYEVREzVMO75hso1l.jpg",
      media_type: "movie",
      genre_ids: [27, 9648],
      popularity: 849.472,
      release_date: "2023-10-25",
      video: false,
      vote_average: 7.7,
      vote_count: 3139,
    },
    {
      adult: false,
      backdrop_path: "/nHf61UzkfFno5X1ofIhugCPus2R.jpg",
      id: 346698,
      title: "Barbie",
      original_language: "en",
      original_title: "Barbie",
      overview:
        "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
      poster_path: "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
      media_type: "movie",
      genre_ids: [35, 12, 14],
      popularity: 404.227,
      release_date: "2023-07-19",
      video: false,
      vote_average: 7.145,
      vote_count: 6880,
    },
    {
      adult: false,
      backdrop_path: "/1X7vow16X7CnCoexXh4H4F2yDJv.jpg",
      id: 466420,
      title: "Killers of the Flower Moon",
      original_language: "en",
      original_title: "Killers of the Flower Moon",
      overview:
        "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one—until the FBI steps in to unravel the mystery.",
      poster_path: "/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg",
      media_type: "movie",
      genre_ids: [80, 18, 36],
      popularity: 410.733,
      release_date: "2023-10-18",
      video: false,
      vote_average: 7.529,
      vote_count: 1842,
    },
    {
      adult: false,
      backdrop_path: "/rrfBenawPGhkt5yvb124NSZwnAC.jpg",
      id: 930564,
      title: "Saltburn",
      original_language: "en",
      original_title: "Saltburn",
      overview:
        "Struggling to find his place at Oxford University, student Oliver Quick finds himself drawn into the world of the charming and aristocratic Felix Catton, who invites him to Saltburn, his eccentric family's sprawling estate, for a summer never to be forgotten.",
      poster_path: "/qjhahNLSZ705B5JP92YMEYPocPz.jpg",
      media_type: "movie",
      genre_ids: [18, 35, 53],
      popularity: 522.643,
      release_date: "2023-11-16",
      video: false,
      vote_average: 7.146,
      vote_count: 1049,
    },
    {
      adult: false,
      backdrop_path: "/5a4JdoFwll5DRtKMe7JLuGQ9yJm.jpg",
      id: 695721,
      title: "The Hunger Games: The Ballad of Songbirds \u0026 Snakes",
      original_language: "en",
      original_title: "The Hunger Games: The Ballad of Songbirds \u0026 Snakes",
      overview:
        "64 years before he becomes the tyrannical president of Panem, Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12.",
      poster_path: "/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg",
      media_type: "movie",
      genre_ids: [18, 878, 28],
      popularity: 662.092,
      release_date: "2023-11-15",
      video: false,
      vote_average: 7.229,
      vote_count: 1453,
    },
    {
      adult: false,
      backdrop_path: "/mSJ18SvWHShacTp8BcqH5WRCkGQ.jpg",
      id: 927107,
      title: "The Bricklayer",
      original_language: "en",
      original_title: "The Bricklayer",
      overview:
        "Someone is blackmailing the CIA by assassinating foreign journalists and making it look like the agency is responsible. As the world begins to unite against the U.S., the CIA must lure its most brilliant – and rebellious – operative out of retirement, forcing him to confront his checkered past while unraveling an international conspiracy.",
      poster_path: "/pwOQ9lqLX1OgsJRSybS662wMcu8.jpg",
      media_type: "movie",
      genre_ids: [28, 53],
      popularity: 285.488,
      release_date: "2023-12-14",
      video: false,
      vote_average: 6.452,
      vote_count: 31,
    },
    {
      adult: false,
      backdrop_path: "/sRLC052ieEzkQs9dEtPMfFxYkej.jpg",
      id: 848326,
      title: "Rebel Moon - Part One: A Child of Fire",
      original_language: "en",
      original_title: "Rebel Moon - Part One: A Child of Fire",
      overview:
        "When a peaceful colony on the edge of the galaxy finds itself threatened by the armies of the tyrannical Regent Balisarius, they dispatch Kora, a young woman with a mysterious past, to seek out warriors from neighboring planets to help them take a stand.",
      poster_path: "/ui4DrH1cKk2vkHshcUcGt2lKxCm.jpg",
      media_type: "movie",
      genre_ids: [878, 18, 28],
      popularity: 587.037,
      release_date: "2023-12-15",
      video: false,
      vote_average: 6.441,
      vote_count: 1194,
    },
    {
      adult: false,
      backdrop_path: "/jXJxMcVoEuXzym3vFnjqDW4ifo6.jpg",
      id: 572802,
      title: "Aquaman and the Lost Kingdom",
      original_language: "en",
      original_title: "Aquaman and the Lost Kingdom",
      overview:
        "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
      poster_path: "/lBm8kh5iucqthRYo9jhsDaJHPJ7.jpg",
      media_type: "movie",
      genre_ids: [28, 12, 14],
      popularity: 1133.761,
      release_date: "2023-12-20",
      video: false,
      vote_average: 6.498,
      vote_count: 467,
    },
    {
      adult: false,
      backdrop_path: "/sQLMaESdeELB7Dl8HdxfGlZYRzu.jpg",
      id: 840430,
      title: "The Holdovers",
      original_language: "en",
      original_title: "The Holdovers",
      overview:
        "A curmudgeonly instructor at a New England prep school is forced to remain on campus during Christmas break to babysit the handful of students with nowhere to go. Eventually, he forms an unlikely bond with one of them — a damaged, brainy troublemaker — and with the school’s head cook, who has just lost a son in Vietnam.",
      poster_path: "/VHSzNBTwxV8vh7wylo7O9CLdac.jpg",
      media_type: "movie",
      genre_ids: [35, 18],
      popularity: 116.677,
      release_date: "2023-10-27",
      video: false,
      vote_average: 7.654,
      vote_count: 340,
    },
  ],
  total_pages: 1000,
  total_results: 20000,
};
