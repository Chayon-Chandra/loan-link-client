import React from "react";
import { Link, useLoaderData } from "react-router";

const LoanDetails = () => {
  const loanDetailsData = useLoaderData();
  const {
    title,
    description,
    maxLoan,
    image,
    interestRate,
    category,
    emiPlans,
  } = loanDetailsData;

  return (
    <div className="max-w-5xl mx-auto p-6 ">
      <div className="card bg-gray-50 shadow-lg">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt={title}
            className="rounded-xl w-full max-w-md object-cover"
          />
        </figure>

        <div className="card-body text-center">
          <h2 className="card-title justify-center text-2xl">{title}</h2>

          <p className="text-sm text-gray-500">{category}</p>

          <p className="mt-2">{description}</p>

          <div className="mt-4 space-y-1">
            <p>
              <span className="font-semibold">Interest Rate:</span>{" "}
              {interestRate}%
            </p>
            <p>
              <span className="font-semibold">Max Loan:</span> ৳
              {maxLoan.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="px-6 pb-8">
          <h3 className="text-xl font-semibold text-center mb-4">EMI Plans</h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {emiPlans?.map((plan, index) => (
              <div
                key={index}
                className="border rounded-xl p-4 text-center hover:shadow transition"
              >
                <p className="text-sm text-gray-500">Duration</p>
                <h4 className="text-lg font-bold">{plan.months} Months</h4>

                <p className="text-sm text-gray-500 mt-2">Monthly EMI</p>
                <p className="text-lg font-semibold text-primary">
                  ${plan.monthlyAmount.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center pb-10">
          <Link to="/apply-now"
            className="font-semibold text-2xl text-primary border-2 border-primary py-2 px-4 rounded-full transition-all duration-300 hover:text-white hover:bg-black hover:border-red-500"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoanDetails;
