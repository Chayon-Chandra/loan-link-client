import React, { use } from "react";
import Container from "../../../Componentes/Container/Container";
import LoanCard from "../LoanCard/LoanCard";
import { Link } from "react-router";

const LatestLoan = ({ latestLoanPromiss }) => {
  const latestLoans = use(latestLoanPromiss);

  return (
    <div className="bg-gray-100">
      <Container>
        <div className="py-7 font-bold text-4xl text-center">
          <h2>Available Loans</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-3 px-2">
          {latestLoans.map((latestLoan) => (
            <LoanCard key={latestLoan._id} latestLoan={latestLoan}></LoanCard>
          ))}
        </div>

        <div className="flex justify-center items-center py-10">
          <Link
            to="/all-loan"
            className="btn btn-primary text-xl"
          >
            Show All
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default LatestLoan;
