import { motion } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { CiSearch } from 'react-icons/ci';
import Link from 'next/link';
import { CircularProgressbar } from 'react-circular-progressbar';

export const MotionDiv = motion.div;
export const MotionInput = motion(Input)
export const MotionCiSearch = motion(CiSearch);
export const MotionLink = motion(Link);
export const MotionSpan = motion.span;
export const ClientCircularProgressBar = CircularProgressbar;