import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { Link, NavLink } from "react-router";
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
  //them toggle button
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

  return (
    <div className="navbar bg-base-100 shadow-md px-6">
      {/* ===== Left (Logo) ===== */}
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl">
          <Logo />
        </Link>
      </div>

      {/* ===== Center (Menu) ===== */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4 font-semibold text-lg">
          {/* Common links */}
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/all-loan">All-Loans</NavLink>
          </li>

          {/* User NOT logged in */}
          {!user && (
            <>
              <li>
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </>
          )}

          {/* User logged in */}
          {user && (
            <>
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
              <li>
                <div className="flex justify-center items-center">
                  <img
                    src={
                      user.photoURL || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"
                    }
                    alt="user"
                    className="w-10 h-10 rounded-full cursor-pointer"
                    title={user.displayName || "User"}
                  />
                </div>
              </li>
              <li>
                <button onClick={handleLogout} className="btn">
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* ===== Right (Theme Toggle) ===== */}
      <div className="navbar-end">
        <button onClick={themeToggle} className="btn btn-outline">
          {theme === "dark" ? <BsSun size={20} /> : <BsMoon size={20} />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
