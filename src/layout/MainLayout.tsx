import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

import { motion } from "motion/react";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <motion.div className="main-container relative">
      <Navbar />
      <Outlet />

      <div className="overflow-hidden">
        {/* <div className="circle__one" />
        <div className="circle__red" />
        <div className="circle__three" />

        <div className="circle__orange" /> */}
      </div>
      <Footer />
    </motion.div>
  );
};

export default MainLayout;
