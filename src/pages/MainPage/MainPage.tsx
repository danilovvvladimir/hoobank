import React from "react";
import Benefits from "../../sections/Benefits/Benefits";
import Deal from "../../sections/Deal/Deal";
import Feedback from "../../sections/Feedback/Feedback";
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
      <Deal />
      <Feedback />
    </>
  );
};

export default MainPage;
