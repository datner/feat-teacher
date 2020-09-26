import Head from "next/head";
import Header from "../components/Header";
import HomeCatagoryBrowser from "../components/HomeCatagoryBrowser";
import HomeHero from "../components/HomeHero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Online Classes by FeatTeacher | Start for Free Today</title>
      </Head>
      <HomeHero />
      <HomeCatagoryBrowser />
    </div>
  );
}
