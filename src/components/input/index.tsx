import { AnimatePresence } from "framer-motion";
import React from "react";
import { MotionInput } from "../motion-elements";

interface IInputProps {
  showSearchInput: boolean;
}

export default function Input({ showSearchInput }: IInputProps) {
  return (
    <AnimatePresence>
      {showSearchInput && (
        <MotionInput
          variants={{
            hidden: { opacity: 0, width: 0 },
            visible: { opacity: 1, width: "100%" },
            exit: {
              opacity: 0,
              width: 0,
              transition: { duration: 0.3, ease: "easeInOut" },
            },
          }}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ delay: 0, duration: 0.3, ease: "easeInOut" }}
          className="rounded-full bg-none w-1/2"
        />
      )}
    </AnimatePresence>
  );
}
