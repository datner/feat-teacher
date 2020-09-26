import React, {
  Children,
  cloneElement,
  Dispatch,
  isValidElement,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  SetStateAction,
  useMemo,
  useState,
} from "react";
import cn from "classnames";
import HomeSlider from "./HomeSlider";
import HomeSliderSlide from "./HomeSliderSlide";

function HomeCatagoryBrowser() {
  const [tab, setTab] = useState("all");
  return (
    <article className="pt-20">
      <div className="flex justify-center text-center">
        <h1 className="max-w-xs mb-5 text-3xl font-bold">
          Find What Stimulates You
        </h1>
      </div>
      <Tabs tab={tab} setTab={setTab}>
        <TabLink value="all">All Catagories</TabLink>
        <TabLink value="anim">Animation</TabLink>
        <TabLink value="design">Design</TabLink>
        <TabLink value="illu">Illustration</TabLink>
        <TabLink value="lifestyle">Lifestyle</TabLink>
        <TabLink value="photo-film">Photo & Film</TabLink>
        <TabLink value="business">Business</TabLink>
        <TabLink value="writing">Writing</TabLink>
      </Tabs>
      <HomeSlider>
        <HomeSliderSlide />
        <HomeSliderSlide />
        <HomeSliderSlide />
        <HomeSliderSlide />
        <HomeSliderSlide />
        <HomeSliderSlide />
        <HomeSliderSlide />
        <HomeSliderSlide />
        <HomeSliderSlide />
      </HomeSlider>
    </article>
  );
}

type TabProps = PropsWithChildren<{
  active?: boolean;
  value: string;
  onClick?(): void;
}>;

function TabLink(props: TabProps) {
  const { active, onClick, children } = props;

  return (
    <button
      className={cn(
        "mx-2 focus:outline-none mb-1 py-1 font-semibold border-b-4",
        {
          "text-green-500 border-green-500 ": active,
          "border-transparent": !active,
        }
      )}
      onClick={onClick}
      children={children}
    />
  );
}

type TabsProps = {
  tab: string;
  setTab: Dispatch<SetStateAction<string>>;
};

function Tabs(props: PropsWithChildren<TabsProps>) {
  const { tab, setTab } = props;

  function makeProps(child: ReactElement<TabProps>) {
    return {
      active: tab === child.props.value,
      onClick: () => setTab(child.props.value),
    };
  }

  return (
    <div className="box-border flex flex-wrap justify-center">
      {Children.map(props.children, (child) => {
        if (isValidElement(child)) {
          return cloneElement<TabProps>(child, makeProps(child));
        }
      })}
    </div>
  );
}

export default HomeCatagoryBrowser;
