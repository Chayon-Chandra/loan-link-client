import React from 'react';
import { PiPiggyBank } from 'react-icons/pi';
import { GrUserAdmin } from "react-icons/gr";
import { Outlet, Link, NavLink } from 'react-router';
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";


const DashBoard = () => {
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
        <Outlet></Outlet>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow">
            {/* List item */}
            <li>
        
              <Link to='/'
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right text-lg"
                data-tip="Homepage"
              >
                {/* Home icon */}
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
                <span className="is-drawer-close:hidden">Homepage</span>
              </Link>
            </li>


        
            
            {/* List item */}
            <li>
              <NavLink to='/dashboard/my-loan'
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right text-lg"
                data-tip="My Loan"
              >
                {/* Settings icon */}
                <PiPiggyBank />
                <span className="is-drawer-close:hidden font-bold text-lg">My Loan</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/manager'
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right text-lg"
                data-tip="Manager"
              >
                {/* Settings icon */}
                <GrUserAdmin />
                <span className="is-drawer-close:hidden font-bold text-lg">Manager</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/admin'
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right text-lg"
                data-tip="Admin"
              >
                {/* Settings icon */}
                <MdOutlineAdminPanelSettings />
                <span className="is-drawer-close:hidden font-bold text-lg">Admin</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/profile'
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right text-lg"
                data-tip="Profile"
              >
                {/* Settings icon */}
               <MdManageAccounts />
                <span className="is-drawer-close:hidden font-bold text-lg">Profile</span>
              </NavLink>
            </li>

            
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right text-lg"
                data-tip="Settings "
              >
                {/* Settings icon */}
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
                  <path d="M20 7h-9"></path>
                  <path d="M14 17H5"></path>
                  <circle cx="17" cy="17" r="3"></circle>
                  <circle cx="7" cy="7" r="3"></circle>
                </svg>
                <span className="is-drawer-close:hidden font-bold text-lg">Settings</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    );
};

export default DashBoard;