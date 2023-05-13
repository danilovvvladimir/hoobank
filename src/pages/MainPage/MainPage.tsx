import React, { useState } from "react";
import Benefits from "../../sections/Benefits/Benefits";
import Deal from "../../sections/Deal/Deal";
import Feedback from "../../sections/Feedback/Feedback";
import Footer from "../../sections/Footer/Footer";
import Header from "../../sections/Header/Header";
import Hero from "../../sections/Hero/Hero";
import Invoicing from "../../sections/Invoicing/Invoicing";
import Service from "../../sections/Service/Service";

const MainPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Benefits />
      <Invoicing />
      <Deal />
      <Feedback />
      <Service />
      <Footer />
    </>
  );
};

export default MainPage;
