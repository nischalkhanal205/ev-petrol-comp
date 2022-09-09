import React from "react";
import Footer from "../components/tailwind/Footer";
import Form from "../components/tailwind/Form";
import HeroSection from "../components/tailwind/HeroSection";
import ImportChoice from "../components/tailwind/ImportChoice";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ImportChoice />
      <Form import={false} />
      <Footer/>
    </div>
  );
};

export default Home;
