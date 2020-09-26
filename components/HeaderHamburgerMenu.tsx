import React from "react";

function HeaderHamburgerMenu() {
  return (
    <div className="absolute z-50 w-full h-screen p-4 bg-white border">
      <ul>
        <li className="flex items-center h-12 border-b">
          <a className="font-bold text-green-900">Home</a>
        </li>
        <li className="flex items-center h-12 border-b">
          <a className="font-bold text-green-900">Browse</a>
        </li>
        <li className="flex items-center h-12 border-b">
          <a className="font-bold text-green-900">Workshops</a>
        </li>
        <li className="flex items-center h-12 border-b">
          <a className="font-bold text-green-900">Student Project</a>
        </li>
        <li className="flex items-center h-12 border-b">
          <a className="font-bold text-green-900">Go Premium</a>
        </li>
      </ul>
    </div>
  );
}

export default HeaderHamburgerMenu;
