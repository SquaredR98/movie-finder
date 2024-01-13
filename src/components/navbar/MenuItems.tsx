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
    link: "tv-shows",
  },
];

export function MenuItemsSmall() {
  return (
    <AnimatePresence>
      <MotionDiv
        variants={{
          hidden: { height: 0, opacity: 0 },
          visible: { height: "100%", opacity: 1 },
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
        className="absolute left-0 right-0 top-16 flex flex-col h-screen bg-slate-900/60 border-t pt-4"
      >
        {navItems.map(({ name, link }, idx) => (
          <AnimatePresence>
            <MotionLink
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
                exit: {
                  opacity: 0,
                  y: -20,
                  transition: { duration: 0.3, ease: "easeInOut" },
                },
              }}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{
                delay: idx * 0.5 + 0.5,
                duration: 0.3,
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
    </AnimatePresence>
  );
}

export default function MenuItems({ showSearchInput }: IMenuItemsProps) {
  return !showSearchInput
    ? navItems.map(({ name, link }, idx) => (
        <MotionLink
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
