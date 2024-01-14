import { AnimatePresence } from "framer-motion";
import React from "react";
import { MotionInput } from "../motion-elements";
import { redirect } from "next/navigation";

interface IInputProps {
  showSearchInput: boolean;
}

function submitForm(data: FormData) {
  const value = data.get('search-input')
  redirect(`/search?query=${value}&page=${1}`);
}
 
export default function Input({ showSearchInput }: IInputProps) {
  return (
    <AnimatePresence>
      {showSearchInput && (
        <form action={submitForm} className="flex justify-end">
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
            name="search-input"
          />
        </form>
      )}
    </AnimatePresence>
  );
}
