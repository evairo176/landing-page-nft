import React from "react";
import Nav from "./components/nav";
import Hero from "./components/hero";
import About from "./components/about";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
    </div>
  );
};

export default page;
