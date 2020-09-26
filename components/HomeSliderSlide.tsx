import React, { MouseEventHandler } from "react";

type Props = {
  slide: object;
  handleClick: MouseEventHandler;
};

function HomeSliderSlide() {
  return (
    <div className="flex-none w-full mr-6 overflow-hidden bg-white rounded shadow base">
      <img
        className="object-cover w-full h-20"
        src="https://placeimg.com/850/480/tech"
      />
      <div className="flex flex-col justify-center p-2">
        <p className="h-20 font-semibold text-center">
          How To Do a Dumb Thing: 5 Things You Should Know
        </p>
        <p className="text-center">
          <a>Yuval Datner</a>
        </p>
      </div>
    </div>
  );
}

export type HomeSliderSlideProps = Props;
export default HomeSliderSlide;
