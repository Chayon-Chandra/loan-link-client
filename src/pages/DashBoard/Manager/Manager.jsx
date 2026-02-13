import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router";

const ManageLoans = () => {
  const axiosSecure = useAxiosSecure();
  const [search, setSearch] = useState("");

  const { data: loans = [], refetch } = useQuery({
    queryKey: ["manager-loans"],
    queryFn: async () => {
      const res = await axiosSecure.get("/loans");
      return res.data;
    },
  });

  // delete loan
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This loan will be deleted!",
      icon: "warning",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/loans/${id}`).then(() => {
          refetch();
          Swal.fire("Deleted!", "Loan removed", "success");
        });
      }
    });
  };

  // search filter
  const filteredLoans = loans.filter(
    (loan) =>
      loan.title.toLowerCase().includes(search.toLowerCase()) ||
      loan.category.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">Manage Loans</h2>

      <div className="flex justify-end">
        <input
          type="text"
          placeholder="Search by title or category"
          className="input input-bordered mb-4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <table className="table table-zebra">
        <thead>
          <tr>
            <th>SL</th>
            <th>Image</th>
            <th>Title</th>
            <th>Interest</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredLoans.map((loan, index) => (
            <tr key={loan._id}>
              <td>{index + 1}</td>
              <td>
                <img src={loan.image} className="w-16 rounded" />
              </td>
              <td>{loan.title}</td>
              <td>{loan.interestRate}%</td>
              <td>{loan.category}</td>
              <td className="flex gap-2">
                <Link
                  to={`/dashboard/update-loan/${loan._id}`}
                  className="btn btn-sm btn-info"
                >
                  Update
                </Link>
                <button
                  onClick={() => handleDelete(loan._id)}
                  className="btn btn-sm btn-error"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageLoans;
