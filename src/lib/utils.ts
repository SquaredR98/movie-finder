import { type ClassValue, clsx } from "clsx";
import axios from "axios";
import { twMerge } from "tailwind-merge";

export const BASE_URL = "https://api.themoviedb.org/3";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

console.log(process.env);



export async function fetchData(url: string, params?: any) {
  const token = process.env.NEXT_PUBLIC_TOKEN;
  
  const headers = {
    Authorization: "bearer " + token,
  };
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function fetchGenres() {
  const types = ["movie", "tv"],
    promises: any = [],
    allGenres: any = {};
  types.forEach((type) => promises.push(fetchData(`/genre/${type}/list`)));
  const data = await Promise.all(promises);
  
  data.map(({ genres }: any) => {
    genres.map((item: any) => (allGenres[item.id] = item.name));
  });

  return allGenres;
}

export async function fetchSearchedQuery(value: string) {
  const data = fetchData(`/search/multi?query=${value}&page=${1}`);
  return data;
}

export const flexibleContainer = `w-11/12 lg:w-10/12 mx-auto`;
export const clipTextEffect = `text-transparent bg-clip-text`;
export const textHoverGradient = `hover:bg-gradient-to-r hover:from-cyan-300 hover:to-indigo-400`;
export const gradientText = `bg-gradient-to-r from-cyan-300 to-indigo-400 inline-block text-transparent bg-clip-text`;
