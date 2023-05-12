import React from "react";
import Benefits from "../../sections/Benefits/Benefits";
import Header from "../../sections/Header/Header";
import Hero from "../../sections/Hero/Hero";
import Invoicing from "../../sections/Invoicing/Invoicing";

const MainPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Benefits />
      <Invoicing />
    </>
  );
};

export default MainPage;
