"use client";

import React, { useState } from "react";
import Logo from "@/components/navbar/Logo";
import { flexibleContainer } from "@/lib/utils";
import MenuItems, { MenuItemsSmall } from "./MenuItems";
import Input from "../input";
import SearchButton from "./SearchButton";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function Navbar() {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navItemsMapped = (
    <div className="flex items-center">
      <MenuItems showSearchInput={showSearchInput} />
      <div className="flex justify-end">
        <Input showSearchInput={showSearchInput} />
      </div>
      <SearchButton
        showSearchInput={showSearchInput}
        setShowSearchInput={setShowSearchInput}
      />
      {!showSearchInput ? (
        showMenu ? (
          <IoIosCloseCircleOutline
            className="text-destructive text-3xl cursor-pointer ml-2 md:hidden"
            onClick={() => setShowMenu(false)}
          />
        ) : (
          <CiMenuBurger
            className="text-3xl text-white ml-2 md:hidden"
            onClick={() => setShowMenu(true)}
          />
        )
      ) : null}
      {showMenu && <MenuItemsSmall />}
    </div>
  );

  return (
    <nav className="bg-slate-800/70 py-2 fixed w-screen z-10">
      <div className={`${flexibleContainer} flex justify-between items-center`}>
        <Logo />
        {navItemsMapped}
      </div>
    </nav>
  );
}
