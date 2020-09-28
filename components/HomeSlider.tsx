import React, {
  Children,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from "react";
import cn from "classnames";

type Props = PropsWithChildren<{}>;

function HomeSlider(props: Props) {
  const { children } = props;
  const [current, setCurrent] = useState(0);
  const [offset, setOffset] = useState(2);
  const handleClick = useCallback(
    (next) => () => {
      setCurrent(next);
      setOffset((offset) => {
        if (offset > next && offset - next >= 2 && next !== 0) {
          return offset - 1;
        }
        if (
          offset < next &&
          next - offset >= 2 &&
          next !== Children.count(children) - 1
        ) {
          return offset + 1;
        }
        return offset;
      });
    },
    [children]
  );

  const dotStyle = useMemo(
    () => ({ transform: `translateX(-${(offset - 2) * 20}px)` }),
    [offset]
  );

  const slideStyle = useMemo(
    () => ({ transform: `translateX(-${current * 280}px)` }),
    [current]
  );

  new Array(Children.count(children)).forEach(console.log);
  return (
    <div className="pb-6 mt-6">
      <div className="flex flex-no-wrap items-center justify-center pb-3 overflow-x-hidden">
        <div
          className="flex flex-no-wrap w-64 transition-transform duration-150"
          style={slideStyle}
        >
          {children}
        </div>
      </div>
      <div className="flex flex-no-wrap items-center justify-center">
        <div className="w-24 overflow-hidden">
          <div className="flex flex-no-wrap">
            {times(children, (i) => {
              const [father, son] = dotClasses(i, current, offset);
              return (
                <div key={i} className={father} style={dotStyle}>
                  <div key={i} className={son} onClick={handleClick(i)}></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const times = (children, cb) =>
  new Array(Children.count(children)).fill(null).map((_, i) => cb(i));

const dotClasses = (i, current, offset) => [
  cn(
    "flex items-center min-w-3 min-h-3 duration-100 transition-all align-middle justify-center ",
    {
      "ml-2": i !== 0,
    }
  ),
  cn("flex-none bg-gray-400 rounded-full duration-100 transition-all", {
    "w-2 h-2": offset + 1 < i || offset - 1 > i,
    "w-3 h-3": (offset + 1 >= i && offset - 1 <= i) || current === i,
    "bg-green-400": current === i,
  }),
];

export default HomeSlider;
