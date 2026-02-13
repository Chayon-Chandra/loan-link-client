import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Container from "../../../Componentes/Container/Container";
import useAuth from "../../../hooks/useAuth";

const Admin = () => {
  const [loans, setLoans] = useState([]);
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth();

  useEffect(() => {
    axiosSecure
      .get("/loans")
      .then((res) => setLoans(res.data))
      .catch((err) => console.log(err));
  }, []);

  const deleteLoan = (id) => {
    if (window.confirm("Are you sure?")) {
      axiosSecure
        .delete(`/loans/${id}?email=${user.email}`)
        .then(() => setLoans(loans.filter((l) => l._id !== id)))
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      <Container>
        <div>
          <h2 className="font-semibold text-3xl text-center py-3">All Loans</h2>
          <div  className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Title</th>
                  <th>Interest</th>
                  <th>Category</th>
                  <th>Created By</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {loans.map((l, index) => (
                  <tr key={l._id}>
                    <td>{index + 1}</td>
                    <td>{l.title}</td>
                    <td>{l.interestRate}%</td>
                    <td>{l.category}</td>
                    <td>{l.createdAt}</td>
                    <td>
                      <button onClick={() => deleteLoan(l._id)}>Delete</button>
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

export default Admin;
