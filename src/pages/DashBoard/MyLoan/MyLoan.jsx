// src/pages/UserDashboard/MyLoan.jsx
import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Container from "../../../Componentes/Container/Container";
import { AiFillEye } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Swal from "sweetalert2";
import { RiPassPendingLine } from "react-icons/ri";

const MyLoan = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // Fetch loans for logged-in user
  const { data: loans = [], refetch } = useQuery({
    queryKey: ["my-loan", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-loan?email=${user.email}`);
      return res.data;
    },
  });

  // Cancel loan (only if status is pending)
  const handleLoanCancel = (id, status) => {
    if (status !== "pending") {
      Swal.fire("Oops!", "You can only cancel pending loans.", "info");
      return;
    }

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/my-loan/${id}`).then((res) => {
          if (res.data.deletedCount) {
            refetch();
            Swal.fire("Cancelled!", "Your loan has been cancelled.", "success");
          }
        });
      }
    });
  };

  // Pay loan fee
  const handlePay = (id) => {
    axiosSecure
      .patch(`/pay-loan/${id}`)
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire("Success", "Payment completed", "success");
          refetch();
        }
      })
      .catch((err) => console.log(err));
  };

  // View loan details
  const handleView = (loan) => {
    Swal.fire({
      title: "Loan Details",
      html: `
        <b>Name:</b> ${loan.firstName} <br/>
        <b>Contact:</b> ${loan.contact} <br/>
        <b>Amount:</b> ${loan.loanAmount} <br/>
        <b>Status:</b> ${loan.status} <br/>
        <b>Reason:</b> ${loan.reasonForLoan} <br/>
      `,
      icon: "info",
    });
  };

  const handleApprove = (id) => {
    Swal.fire({
      title: "Approve this loan?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Approve",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/approve-loan/${id}`).then((res) => {
          if (res.data.modifiedCount) {
            Swal.fire("Approved!", "Loan approved successfully", "success");
            refetch();
          }
        });
      }
    });
  };

  return (
    <div>
      <Container>
        <div>
          <h2 className="text-center font-medium text-4xl py-5">
            My Loans ({loans.length})
          </h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Fee Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {loans.map((loan, index) => (
                  <tr key={loan._id}>
                    <td>{index + 1}</td>
                    <td>{loan.firstName}</td>
                    <td>{loan.contact}</td>
                    <td>{loan.loanAmount}</td>
                    <td>{loan.status}</td>
                    <td>
                      {loan.feeStatus === "paid" ? (
                        <span className="badge bg-green-500">Paid</span>
                      ) : (
                        <span className="badge">Unpaid</span>
                      )}
                    </td>
                    <td className="flex gap-2">
                      {/* View */}
                      <button
                        className="btn btn-square btn-info"
                        onClick={() => handleView(loan)}
                      >
                        <AiFillEye />
                      </button>

                      {/* Approve */}
                      {loan.status === "pending" && (
                        <button
                          className="btn btn-square btn-primary"
                          onClick={() => handleApprove(loan._id)}
                        >
                          <RiPassPendingLine />
                        </button>
                      )}

                      {/* Cancel */}
                      {loan.status === "pending" && (
                        <button
                          className="btn btn-square btn-warning"
                          onClick={() =>
                            handleLoanCancel(loan._id, loan.status)
                          }
                        >
                          <IoMdClose />
                        </button>
                      )}

                      {/* Pay */}
                      {loan.feeStatus === "unpaid" && (
                        <button
                          className="btn btn-square btn-success "
                          onClick={() => handlePay(loan._id)}
                        >
                          Pay
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyLoan;
