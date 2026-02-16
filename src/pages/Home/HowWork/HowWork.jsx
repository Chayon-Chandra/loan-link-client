import React from "react";


const HowWork = () => {
  return (
    <div>
      <section className="bg-slate-50 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              How It Works
            </h2>
            <p className="mt-4 text-slate-500">
              Simple, fast and secure loan process designed for you
            </p>
          </div>
  
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative bg-white rounded-2xl p-8 shadow hover:shadow-xl transition hover:-translate-y-2">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold">
                1
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-800">
                Apply Online
              </h3>
              <p className="mt-3 text-sm text-slate-500">
                Submit your loan application with basic personal and financial
                details.
              </p>
            </div>

            <div className="relative bg-white rounded-2xl p-8 shadow hover:shadow-xl transition hover:-translate-y-2">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold">
                2
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-800">
                Document Verification
              </h3>
              <p className="mt-3 text-sm text-slate-500">
                We verify your NID, income source, and other required documents.
              </p>
            </div>

            <div className="relative bg-white rounded-2xl p-8 shadow hover:shadow-xl transition hover:-translate-y-2">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold">
                3
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-800">
                Loan Approval
              </h3>
              <p className="mt-3 text-sm text-slate-500">
                Our team reviews and approves your loan request quickly.
              </p>
            </div>

            <div className="relative bg-white rounded-2xl p-8 shadow hover:shadow-xl transition hover:-translate-y-2">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold">
                4
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-800">
                Get Your Money
              </h3>
              <p className="mt-3 text-sm text-slate-500">
                Funds are transferred directly to your bank account.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition"
            >
              Apply for Loan
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWork;
