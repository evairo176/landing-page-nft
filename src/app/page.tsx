import React from "react";
import Nav from "./components/nav";
import Hero from "./components/hero";
import About from "./components/about";
import BecomeCreator from "./components/become-creator";
import PopularNft from "./components/popular-nft";
import LiveSales from "./components/live-sales";
import TopCreator from "./components/top-creator";
import Footer from "./components/footer";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <BecomeCreator />
      <PopularNft />
      <LiveSales />
      <TopCreator />
      <Footer />
    </div>
  );
};

export default page;
