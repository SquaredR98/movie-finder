import React from "react";
import { MotionDiv, MotionLink } from "../motion-elements";
import { clipTextEffect, textHoverGradient } from "../../lib/utils";
import { AnimatePresence } from "framer-motion";

interface IMenuItemsProps {
  showSearchInput: boolean;
}
interface IMenuItemsSmallProps {
  showMenu: boolean;
}

const navItems = [
  {
    name: "Movies",
    link: "/movies",
  },
  {
    name: "TV Shows",
    link: "tv",
  },
];

export function MenuItemsSmall() {
  return (
    <MotionDiv
      variants={{
        hidden: { height: 0, opacity: 0 },
        visible: { height: "100vh", opacity: 1 },
        exit: {
          opacity: 0,
          height: 0,
          transition: { duration: 0.3, ease: "easeInOut" },
        },
      }}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ delay: 0, duration: 0.3, ease: "easeInOut" }}
      className="absolute left-0 right-0 top-16 bottom-0 flex flex-col h-screen bg-slate-900/70 backdrop-blur-lg border-t pt-4"
    >
      {navItems.map(({ name, link }, idx) => (
        <AnimatePresence key={idx}>
          <MotionLink
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
              exit: {
                opacity: 0,
                transition: { duration: 0.1, ease: "easeInOut" },
              },
            }}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{
              delay: idx * 0.5 + 0.5,
              duration: 0.5,
              ease: "easeInOut",
            }}
            href={link}
            className={`md:hidden py-2 px-8 bg-white ${clipTextEffect} font-bold text-xl ${textHoverGradient} transition-all duration-500`}
          >
            {name}
          </MotionLink>
        </AnimatePresence>
      ))}
    </MotionDiv>
  );
}

export default function MenuItems({ showSearchInput }: IMenuItemsProps) {
  return !showSearchInput
    ? navItems.map(({ name, link }, idx) => (
        <MotionLink
          key={idx}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
            exit: {
              opacity: 0,
              transition: { duration: 0.3, ease: "easeInOut" },
            },
          }}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ delay: 0.5, duration: 0.3, ease: "easeInOut" }}
          href={link}
          className={`hidden md:block py-2 px-4 bg-white ${clipTextEffect} font-bold text-xl ${textHoverGradient} transition-all duration-500`}
        >
          {name}
        </MotionLink>
      ))
    : null;
}
