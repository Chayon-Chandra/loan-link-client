import React from "react";
import Banner from "../Banner/Banner";
import HowWork from "../HowWork/HowWork";
import CustomarReviwe from "../CustomarReviwe/CustomarReviwe";
import WhyChoose from "../WhyChoose/WhyChoose";
import FAQ from "../FAQ/FAQ";
import LatestLoan from "../LatestLoan/LatestLoan";

const latestLoanPromiss = fetch(
  "https://loan-link-api.vercel.app/latest-loans",
).then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <LatestLoan latestLoanPromiss={latestLoanPromiss}></LatestLoan>
      <HowWork></HowWork>
      <WhyChoose></WhyChoose>
      <CustomarReviwe></CustomarReviwe>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
