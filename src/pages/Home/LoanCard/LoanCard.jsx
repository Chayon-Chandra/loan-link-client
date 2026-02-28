import React from "react";
import { Link } from "react-router";

const LoanCard = ({ latestLoan }) => {
  const {_id, title, description, maxLoan, image, interestRate} = latestLoan;
  return (
    <div className="card bg-base-100 shadow-sm hover:scale-105 transition ease-in-out">
      <figure className="px-10 pt-10">
        <img
          src={image}
          className="rounded-xl w-80 h-48"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p> Interest Rate : {interestRate}%</p>
        <p> Max Loan: $ {maxLoan}</p>

        <div className="card-actions py-2">
          <Link to={`/loan-details/${_id}`} className="btn btn-primary">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default LoanCard;
