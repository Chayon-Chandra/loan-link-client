import React, { use } from 'react';
import Loan from '../Loan/Loan';

const LoansContanet = ({loansPromise}) => {
    const loans = use(loansPromise);
  
    return (
        <div className='bg-gray-200'>
            <div className="pb-7 font-bold text-5xl text-center text-primary">
                <h2>Our All Loans</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-3 px-2">
                {
                    loans.map((loan) => <Loan key={loan._id} loan={loan}></Loan>)
                }
            </div>
        </div>
    );
};

export default LoansContanet;