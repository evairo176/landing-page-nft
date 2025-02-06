import React from "react";
import HeadingMini from "./frontend/heading-mini";
import CreatorCard from "./frontend/creator-card";

type Props = {};

const TopCreator = (props: Props) => {
  return (
    <div className="pt-[3rem] pb-[5rem] bg-blue-950">
      <div className="flex items-center justify-center flex-col">
        <HeadingMini title="Creator" borderColor="before:bg-yellow-300" />
        <h1 className="heading__primary">
          Top <span className="text-yellow-300">Creator</span> Of Today
        </h1>
      </div>
      <div className="w-[80%] pt-[5rem] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-[2rem]">
        <CreatorCard image="/images/user6.png" user="Afid Lee" price={128} />
        <CreatorCard
          delay="100"
          image="/images/user5.png"
          user="Dicki Prasetya"
          price={111}
        />
        <CreatorCard
          delay="200"
          image="/images/user4.png"
          user="Makhfukin Xio"
          price={80}
        />
        <CreatorCard
          delay="300"
          image="/images/user3.png"
          user="Arif Wu"
          price={59}
        />
        <CreatorCard
          delay="400"
          image="/images/user2.png"
          user="Bayu XI"
          price={30}
        />
        <CreatorCard
          delay="500"
          image="/images/user1.png"
          user="Yoga Ma"
          price={13}
        />
      </div>
    </div>
  );
};

export default TopCreator;
