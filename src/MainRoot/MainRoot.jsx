import React from "react";
import Navbar from "../pages/Home/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../pages/Footer/Footer/Footer";

const MainRoot = () => {
  return (
    <div className="flex flex-col min-h-screen mx-auto">
      <Navbar></Navbar>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainRoot;
