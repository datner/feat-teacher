import Head from "next/head";
import Header from "../components/Header";
import HomeCategoryBrowser from "../components/HomeCategoryBrowser";
import HomeHero from "../components/HomeHero";
import HomePromotionCaresule from "../components/HomePromotionCaresule";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Online Classes by FeatTeacher | Start for Free Today</title>
      </Head>
      <HomeHero />
      <HomeCategoryBrowser />
      <HomePromotionCaresule />
    </div>
  );
}
