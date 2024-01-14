import { type ClassValue, clsx } from "clsx";
import axios from "axios";
import { twMerge } from "tailwind-merge";

export const BASE_URL = "https://api.themoviedb.org/3";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export async function fetchData(url: string, params?: any) {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTU3MGI0MzAzNTQ1NzU2MDFlODI4YjkxNWQ4ZDFkZSIsInN1YiI6IjY0ZGM3NDcwNTllOGE5MDBmZmZlNzUyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4CRz2julUWr0ZQxwYlX2fX_bGAuk5OWEDiBiYGP3Tzo";
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

export const flexibleContainer = `w-11/12 lg:w-10/12 mx-auto`;
export const clipTextEffect = `text-transparent bg-clip-text`;
export const textHoverGradient = `hover:bg-gradient-to-r hover:from-cyan-300 hover:to-indigo-400`;
export const gradientText = `bg-gradient-to-r from-cyan-300 to-indigo-400 inline-block text-transparent bg-clip-text`;
