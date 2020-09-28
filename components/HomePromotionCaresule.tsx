import axios from "axios";
import { FaPlay } from "react-icons/fa";
import { useQuery } from "react-query";

type ImageResponse = { url: string };

function HomePromotionCaresule() {
  const { data, isLoading, error } = useQuery<ImageResponse>(
    ["images", 1],
    async (key, index) => {
      const { data } = await axios(`api/images/${index}`);
      return data;
    }
  );

  const style = {
    background: `url(${data.url})`,
  };

  return (
    <div
      className="relative flex items-center p-8 bg-blue-300 h-hero"
      style={style}
    >
      <div className="absolute inset-0 z-0 bg-black opacity-50" />
      <div className="z-10 flex-grow text-white">
        <Title type="original" />
        <div className="w-48">
          <h2 className="my-5 font-extrabold tracking-wide text-shadow-md">
            Learn Karate and the Arts of Kong-Fu
          </h2>
        </div>
        <p className="text-xs font-medium">
          Transform your body into a machine for killing, hurting, and finding
          calm with Sensei Adam Shen Lee.
        </p>
        <button className="inline-flex items-center px-5 py-px mt-3 text-xs font-bold leading-loose tracking-wide text-black bg-blue-400 rounded">
          <FaPlay /> <span className="pl-2 mt-px"> Watch now</span>
        </button>
      </div>
    </div>
  );
}

function Title(props: { type: "original" | "staff-pick" }) {
  const { type } = props;

  if (type === "original") {
    return <h6 className="text-xs font-semibold tracking-wider">Original.</h6>;
  }

  if (type === "staff-pick") {
    return <h6>Staff Pick</h6>;
  }
}

export default HomePromotionCaresule;
