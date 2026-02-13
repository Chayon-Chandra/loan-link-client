import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const Profile = () => {
  const { user, logOut, loading } = useAuth();
  const navigate = useNavigate();

  // Logout handler
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut().then(() => {
          Swal.fire("Logged out!", "success");
          navigate("/login");
        });
      }
    });
  };

  // Loading spinner
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return <div className="max-w-md mx-auto mt-10 p-6 shadow-lg rounded-lg bg-base-100">
      <div className="text-center">
        <img
          src={user?.photoURL || "https://i.ibb.co/2kRkz9m/user.png"}
          alt="profile"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h2 className="text-2xl font-semibold">{user?.displayName}</h2>
        <p className="text-gray-500">{user?.email}</p>
      </div>

      <div className="mt-6">
        <button
          onClick={handleLogout}
          className="btn btn-error w-full"
        >
          Logout
        </button>
      </div>
    </div>;
};

export default Profile;
