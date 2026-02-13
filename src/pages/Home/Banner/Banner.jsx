import React from "react";
import bannerImage from "../../../assets/banner.png";
import Container from "../../../Componentes/Container/Container";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="bg-[#F1F1FD]">
      <Container>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-24 py-12 ">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">
              Get the Loan You Need, When You Need It
            </h1>

            <p className="text-gray-700 mb-6 lg:mb-8">
              Whether it's for personal growth, education, or small business,
              our quick and hassle-free loans help you achieve your goals. Safe,
              transparent, and fully online.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              
              <Link to='apply-now' className="btn btn-primary">Apply for Loan</Link>
              <Link to='explore-loans' className="btn btn-outline">Explore Loans</Link>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
            <img
              className="w-80 sm:w-96 lg:w-full"
              src={bannerImage}
              alt="Loan Banner"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
