import React from "react";
import Hero from "../../components/Hero/Hero";
import CategoryLink from "../../components/CategoryLink/CategoryLink";
import ZX9SpeakerHome from "../../components/ZX9SpeakerHome/ZX9SpeakerHome";

const Home = (props) => {
  return (
    <>
      <Hero />
      <CategoryLink />
      <ZX9SpeakerHome />
    </>
  );
};

export default Home;
