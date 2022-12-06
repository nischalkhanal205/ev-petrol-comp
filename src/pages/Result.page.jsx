import React from "react";
import StatsBox from "../components/StatsBox";
import { useLocation } from "react-router";
import Footer from "../components/Footer";
import Co2Banner from "../components/Co2Banner";

const Result = () => {
  const location = useLocation();
  const { result, data } = location.state;
  return (
    <div>
      <StatsBox data={data} result={result} />
      <Co2Banner result={result}/>
      <Footer/>
    </div>
  );
};

export default Result;
