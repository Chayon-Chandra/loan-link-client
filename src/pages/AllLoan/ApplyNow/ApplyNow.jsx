import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ApplyNow = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const handleApply = async (data) => {
    const res = await axiosSecure.post("/loan-apply", data);
    if (res.data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your data has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Loan Application Form
      </h2>

      <form
        onSubmit={handleSubmit(handleApply)}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <input
          {...register("userEmail")}
          defaultValue={user?.email || ""}
          type="email"
          readOnly
          className="input input-bordered w-full"
          placeholder="User Email"
        />

        <input
          {...register("firstName", { required: true })}
          type="text"
          placeholder="First Name"
          className="input input-bordered w-full"
        />

        <input
          {...register("lastName", { required: true })}
          type="text"
          placeholder="Last Name"
          className="input input-bordered w-full"
        />

        <input
          {...register("contact", { required: true })}
          type="text"
          placeholder="Contact Number"
          className="input input-bordered w-full"
        />

        <input
          {...register("nidOrPassport", { required: true })}
          type="text"
          placeholder="National ID / Passport Number"
          className="input input-bordered w-full"
        />

        <input
          {...register("incomeSource", { required: true })}
          type="text"
          placeholder="Income Source"
          className="input input-bordered w-full"
        />

        <input
          {...register("monthlyIncome", { required: true })}
          type="number"
          placeholder="Monthly Income"
          className="input input-bordered w-full"
        />

        <input
          {...register("loanAmount", { required: true })}
          type="number"
          placeholder="Loan Amount"
          className="input input-bordered w-full"
        />

        <input
          {...register("reasonForLoan", { required: true })}
          type="text"
          placeholder="Reason for Loan"
          className="input input-bordered w-full"
        />

        <textarea
          {...register("address", { required: true })}
          placeholder="Address"
          className="textarea textarea-bordered w-full md:col-span-2"
        ></textarea>

        <textarea
          {...register("description")}
          placeholder="Extra Notes (Optional)"
          className="textarea textarea-bordered w-full md:col-span-2"
        ></textarea>

        {/* Submit Button */}
        <button type="submit" className="md:col-span-2 btn btn-primary text-lg">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyNow;
