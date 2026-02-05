import React from "react";

const LoanCard = ({ latestLoan }) => {
  const {title, description, maxLoan, image} = latestLoan;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="px-10 pt-10">
        <img
          src={image}
          className="rounded-xl w-80 h-48"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p> Max Loan: $ {maxLoan}</p>

        <div className="card-actions py-2">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default LoanCard;
