import React, { useState } from "react";
import Form from "../../components/Form/Form";
import Modal from "../../components/Modal/Modal";
import Benefits from "../../sections/Benefits/Benefits";
import Deal from "../../sections/Deal/Deal";
import Feedback from "../../sections/Feedback/Feedback";
import Footer from "../../sections/Footer/Footer";
import Header from "../../sections/Header/Header";
import Hero from "../../sections/Hero/Hero";
import Invoicing from "../../sections/Invoicing/Invoicing";
import Service from "../../sections/Service/Service";

const MainPage = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  return (
    <>
      <Header />
      <Hero />
      <Benefits setIsModalActive={setIsModalActive} />
      <Invoicing />
      <Deal setIsModalActive={setIsModalActive} />
      <Feedback />
      <Service setIsModalActive={setIsModalActive} />
      <Footer />
      <Modal isModalActive={isModalActive} setIsModalActive={setIsModalActive}>
        {
          <Form
            isModalActive={isModalActive}
            setIsModalActive={setIsModalActive}
          />
        }
      </Modal>
    </>
  );
};

export default MainPage;
