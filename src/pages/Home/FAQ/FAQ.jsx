import React from "react";

const FAQ = () => {
  return (
    <div className="bg-slate-50 py-10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-slate-500">
            Everything you need to know before applying
          </p>
        </div>

        <div className="space-y-6">
          <div className="border border-gray-200 rounded-xl p-5 hover:border-red-500 transition">
            <h4 className="font-semibold">How long does loan approval take?</h4>
            <p className="mt-2 text-sm text-slate-500">
              Most loans are approved within 24 hours.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5 hover:border-red-500 transition">
            <h4 className="font-semibold">What documents are required?</h4>
            <p className="mt-2 text-sm text-slate-500">
              National ID, bank details, and income proof.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5 hover:border-red-500 transition">
            <h4 className="font-semibold">Is my personal data secure?</h4>
            <p className="mt-2 text-sm text-slate-500">
              Yes, we use industry-standard security measures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
