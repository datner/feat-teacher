import React, { useReducer, useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";

type Props = {
  onClick(): void;
  open: boolean;
};

const HeaderHamburger = ({ onClick, open }: Props) =>
  open ? (
    <IoMdClose onClick={onClick} className="text-3xl text-blue-500" />
  ) : (
    <IoIosMenu onClick={onClick} className="text-3xl text-white" />
  );

export default HeaderHamburger;
