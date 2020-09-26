import React from "react";
import { IoIosSearch } from "react-icons/io";
import { useToggle } from "../libs/useToggle";
import HeaderHamburger from "./HeaderHamburger";
import HeaderHamburgerMenu from "./HeaderHamburgerMenu";

function Header() {
  const [open, toggleOpen] = useToggle(false);
  return (
    <>
      <nav className="flex items-center h-16 px-4 py-3 text-white bg-green-900">
        <HeaderHamburger open={open} onClick={toggleOpen} />
        <IoIosSearch className="ml-2 text-3xl" />
        <div className="flex items-center justify-center flex-grow text-3xl">
          feat teacher
        </div>
        <div className="px-3 py-1 ml-2 border-2 border-white rounded active:bg-white active:text-green-900">
          Sign In
        </div>
      </nav>
      {open && <HeaderHamburgerMenu />}
    </>
  );
}

export default Header;
