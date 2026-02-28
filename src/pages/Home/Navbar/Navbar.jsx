import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { Link, NavLink } from "react-router";
import { HiMenu } from "react-icons/hi";
import Logo from "../../../Componentes/Logo/Logo";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saveTheme = localStorage.getItem("theme") || "light";
    setTheme(saveTheme);
    document.documentElement.setAttribute("data-theme", saveTheme);
  }, []);

  const themeToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("User logged out");
      })
      .catch((error) => console.error(error));
  };

  const navLinks = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/all-loan">All-Loans</NavLink></li>

      {!user && (
        <>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/register">Register</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
        </>
      )}

      {user && (
        <>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          <li>
            <img
              src={
                user.photoURL ||
                "https://i.ibb.co/MBtjqXQ/no-avatar.gif"
              }
              alt="user"
              className="w-10 h-10 rounded-full"
              title={user.displayName || "User"}
            />
          </li>
          <li>
            <button onClick={handleLogout} className="btn btn-sm">
              Logout
            </button>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar sticky top-0 z-50 bg-base-100 shadow-md px-6">

      {/* ===== Left ===== */}
      <div className="navbar-start">

        {/* Mobile Menu */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <HiMenu size={24} />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="btn btn-ghost text-xl">
          <Logo />
        </Link>
      </div>

      {/* ===== Desktop Menu ===== */}
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal gap-4 font-semibold text-lg">
          {navLinks}
        </ul>
      </div>

      {/* ===== Right ===== */}
      <div className="navbar-end">
        <button onClick={themeToggle} className="btn btn-outline">
          {theme === "dark" ? <BsSun size={20} /> : <BsMoon size={20} />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
