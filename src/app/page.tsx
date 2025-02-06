import React from "react";
import Nav from "./components/nav";
import Hero from "./components/hero";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Nav />
      <Hero />
    </div>
  );
};

export default page;
