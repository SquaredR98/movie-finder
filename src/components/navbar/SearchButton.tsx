import { AnimatePresence } from "framer-motion";
import React from "react";
import { MotionSpan } from "../motion-elements";
import { CiSearch } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface ISearchButtonProps {
  showSearchInput: boolean;
  setShowSearchInput: any;
}

export default function SearchButton({
  showSearchInput,
  setShowSearchInput,
}: ISearchButtonProps) {
  return (
    <AnimatePresence>
      {!showSearchInput ? (
        <MotionSpan
          key="searchIcon"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
            exit: {
              opacity: 0,
              transition: { duration: 0.1, ease: "easeInOut" },
            },
          }}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ delay: 0.1, duration: 0.3, ease: "easeInOut" }}
        >
          <CiSearch
            className="text-white text-3xl cursor-pointer"
            onClick={() => setShowSearchInput(true)}
          />
        </MotionSpan>
      ) : (
        <MotionSpan
          key="closeIcon"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
            exit: {
              opacity: 0,
              transition: { duration: 0.1, ease: "easeInOut" },
            },
          }}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ delay: 0.1, duration: 0.3, ease: "easeInOut" }}
        >
          <IoIosCloseCircleOutline
            className="text-destructive text-3xl cursor-pointer ml-2"
            onClick={() => setShowSearchInput(false)}
          />
        </MotionSpan>
      )}
    </AnimatePresence>
  );
}
