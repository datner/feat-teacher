import React from "react";
import cn from "classnames";
import styles from "../styles/Home.module.css";

function HomeHero() {
  return (
    <div className={cn(styles.hero, "flex relative items-center h-sm-hero bg")}>
      <div className="absolute inset-0 z-0 bg-black opacity-50" />
      <div className="z-10 flex-grow font-bold text-center text-white">
        <h1 className="font-serif text-4xl">
          Discover your Innovation<span className="text-blue-400">.</span>
        </h1>
        <h2 className="my-5 font-semibold tracking-wide text-shadow-md">
          Join FeatTeacher to view, mess around, learn, create, and innovate.
        </h2>
        <button className="px-6 py-2 text-2xl font-bold leading-loose text-black bg-blue-400 rounded">
          Get Started for Free
        </button>
      </div>
    </div>
  );
}

export default HomeHero;
