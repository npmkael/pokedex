import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className="main-container">
      <Navbar />
      <Outlet />

      <div className="circle__one" />
      <div className="circle__red" />
      <div className="circle__three" />

      <div className="circle__orange" />
    </main>
  );
};

export default MainLayout;
