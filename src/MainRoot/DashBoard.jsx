import React from "react";
import { GrUserAdd } from "react-icons/gr";
import { MdOutlineAdminPanelSettings, MdOutlineManageAccounts } from "react-icons/md";
import { PiPiggyBank } from "react-icons/pi";
import { Link, NavLink, Outlet } from "react-router";


const DashBoard = () => {
  // get role from localStorage
  const role = localStorage.getItem("userRole");

  // logout function
  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("userEmail");
    window.location.href = "/";
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-300">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            {/* Sidebar toggle icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="my-1.5 inline-block size-4"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M9 4v16"></path>
              <path d="M14 10l2 2l-2 2"></path>
            </svg>
          </label>
          <div className="px-4 text-2xl text-primary font-semibold">Microloan</div>
        </nav>

        {/* Outlet for nested routes */}
        <Outlet />
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 w-64">
          <ul className="menu w-full grow">
            {/* Homepage */}
            <li>
              <Link to="/" className="text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="my-1.5 inline-block size-4 font-bold text-lg"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                <span className="font-bold text-lg">Homepage</span>
              </Link>
            </li>

            {/* My Loan */}
            <li>
              <NavLink to="/dashboard/my-loan" className="text-lg">
                <PiPiggyBank />
                <span className="font-bold text-lg">My Loan</span>
              </NavLink>
            </li>

            {/* Manager Menu (only for manager) */}
            {role === "manager" && (
              <li>
                <NavLink to="/dashboard/manager" className="text-lg">
                  <GrUserAdd />
                  <span className="font-bold text-lg">Manager</span>
                </NavLink>
              </li>
            )}

            {/* Admin Menu (only for admin) */}
            {role === "admin" && (
              <li>
                <NavLink to="/dashboard/admin" className="text-lg">
                  <MdOutlineAdminPanelSettings />
                  <span className="font-bold text-lg">Admin</span>
                </NavLink>
              </li>
            )}

       
            <li>
              <NavLink to="/dashboard/profile" className="text-lg">
               <MdOutlineManageAccounts />
                <span className="font-bold text-lg">Profile</span>
              </NavLink>
            </li>

           
            <li>
              <button onClick={handleLogout} className="text-lg">
                <span className="font-bold text-lg">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
