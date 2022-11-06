import React from "react";
import DevFooter from "../components/DevFooter";
import Footer from "../components/Footer";
import Form from "../components/Form";
import HeroSection from "../components/HeroSection";
import ImportChoice from "../components/ImportChoice";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ImportChoice />
      <Form />
      <Footer/>
      <DevFooter/>
    </div>
  );
};

export default Home;
