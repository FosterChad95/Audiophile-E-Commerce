import React from "react";
import Hero from "../../components/Hero/Hero";
import CategoryLink from "../../components/CategoryLink/CategoryLink";
import ZX9SpeakerHome from "../../components/ZX9SpeakerHome/ZX9SpeakerHome";
import ZX7SpeakerHome from "../../components/ZX7SpeakerHome/ZX7SpeakerHome";
import YX1EarphonesHome from "../../components/YX1EarphonesHome/YX1EarphonesHome";
import BrandDescription from "../../components/BrandDescription/BrandDescription";
import Footer from "../../components/Footer/Footer";

const Home = (props) => {
  return (
    <>
      <Hero />
      <CategoryLink />
      <ZX9SpeakerHome />
      <ZX7SpeakerHome />
      <YX1EarphonesHome />
      <BrandDescription />
      <Footer />
    </>
  );
};

export default Home;
