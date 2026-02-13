import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UpdateLoan = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const [loan, setLoan] = useState({
    title: "",
    interest: "",
    category: "",
  });

  useEffect(() => {
    axiosSecure.get(`/loans/${id}`).then((res) => {
      setLoan(res.data);
    });
  }, [id, axiosSecure]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoan({ ...loan, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosSecure.patch(`/loans/${id}`, loan).then((res) => {
      if (res.data.modifiedCount) {
        Swal.fire("Updated!", "Loan updated successfully", "success");
        navigate("/dashboard/manage-loans");
      }
    });
  };
  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Update Loan</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Loan Title</label>
          <input
            type="text"
            name="title"
            value={loan.title}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Interest (%)</label>
          <input
            type="number"
            name="interest"
            value={loan.interest}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Category</label>
          <select
            name="category"
            value={loan.category}
            onChange={handleChange}
            className="select select-bordered w-full"
          >
            <option value="">Select Category</option>
            <option value="Personal">Personal</option>
            <option value="Business">Business</option>
            <option value="Education">Education</option>
          </select>
        </div>

        <button className="btn btn-primary w-full">Update Loan</button>
      </form>
    </div>
  );
};

export default UpdateLoan;
