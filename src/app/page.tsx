"use client";
import React, { useEffect } from "react";
import Nav from "./components/nav";
import Hero from "./components/hero";
import About from "./components/about";
import BecomeCreator from "./components/become-creator";
import PopularNft from "./components/popular-nft";
import LiveSales from "./components/live-sales";
import TopCreator from "./components/top-creator";
import Footer from "./components/footer";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

type Props = {};

const page = (props: Props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

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
