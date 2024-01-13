import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const flexibleContainer = `w-11/12 md:w-10/12 lg:w-9/12 mx-auto`;
export const clipTextEffect = `text-transparent bg-clip-text`;
export const textHoverGradient = `hover:bg-gradient-to-r hover:from-cyan-300 hover:to-indigo-400`;
export const gradientText = `bg-gradient-to-r from-cyan-300 to-indigo-400 inline-block text-transparent bg-clip-text`;
