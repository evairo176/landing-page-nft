import React from "react";
import Nav from "./components/nav";
import Hero from "./components/hero";
import About from "./components/about";
import BecomeCreator from "./components/become-creator";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <BecomeCreator />
    </div>
  );
};

export default page;
