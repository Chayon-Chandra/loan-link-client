import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Loading from '../../../Componentes/Loading/Loading';

const ExploreLoans = () => {
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Explore Loans | LoanLink";

    fetch("http://localhost:3000/loans")
      .then((res) => res.json())
      .then((data) => {
        setLoans(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
        <Loading></Loading>
    );
  }
    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        Explore Our Loan Offers
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loans.map((loan) => (
          <div key={loan._id} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src={loan.image}
                alt={loan.title}
                className="h-48 w-full object-cover"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title">{loan.title}</h2>

              <p className="text-sm text-gray-500">
                {loan.description.slice(0, 80)}...
              </p>

              <div className="mt-3 space-y-1">
                <p>
                  <span className="font-semibold">Max Loan:</span> $
                  {loan.maxLoan}
                </p>
                <p>
                  <span className="font-semibold">Interest:</span>{" "}
                  {loan.interestRate}%
                </p>
                <p>
                  <span className="font-semibold">Category:</span>{" "}
                  {loan.category}
                </p>
              </div>

              <div className="card-actions justify-end mt-4">
                <Link
                  to={`/loan-details/${loan._id}`}
                  className="btn btn-primary btn-sm"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default ExploreLoans;