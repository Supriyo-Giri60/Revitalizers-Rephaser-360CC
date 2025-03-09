import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

function Home() {
  return (
    <div
      className="container-fluid d-flex flex-column justify-content-center align-items-center text-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "white",
        padding: "20px",
      }}
    >
      <motion.h1
        className="display-3 fw-bold"
        style={{
          textShadow: "0px 0px 15px rgba(0, 255, 255, 0.8)",
        }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to Rephaser <br />
        <h4>An ML-Based Demand Trend Analyzer and Inventory Management System</h4>
      </motion.h1>

      <motion.p
        className="lead"
        style={{ color: "#b3e5fc" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Optimize your stock levels with AI-driven demand forecasting. */}
        Lets you manage your stock levels with ML-driven forecasting!
      </motion.p>

      <motion.img
        src="https://source.unsplash.com/800x400/?technology,inventory"
        alt="Inventory Management"
        className="img-fluid rounded shadow-lg mt-4"
        style={{
          borderRadius: "20px",
          boxShadow: "0px 0px 20px rgba(0, 255, 255, 0.5)",
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      <motion.div
        className="mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <a
          href="/inventory"
          className="btn btn-lg"
          style={{
            background: "rgba(0, 255, 255, 0.3)",
            border: "2px solid #00FFFF",
            color: "white",
            boxShadow: "0px 0px 10px rgba(0, 255, 255, 0.8)",
            backdropFilter: "blur(5px)",
          }}
        >
          Manage Inventory
        </a>
        <a
          href="/predictions"
          className="btn btn-outline-light btn-lg ms-3"
          style={{
            border: "2px solid #00FFFF",
            boxShadow: "0px 0px 10px rgba(0, 255, 255, 0.8)",
          }}
        >
          View Predictions
        </a>
      </motion.div>

      <motion.div
        className="mt-5 w-75"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      > <br /> <br /> <br />  
        <h3
          className="fw-bold"
          style={{ textShadow: "0px 0px 15px rgba(0, 255, 255, 0.8)" }}
        >
          ABOUT US
        </h3>
        <p className="text-light">
          We provide AI-driven insights to help you manage stock efficiently,
          To address this, we propose an AI-driven inventory management system 
          that uses historical sales data and machine learning to forecast demand. This system will help businesses dynamically adjust their inventory levels, ensuring optimal stock availability, minimizing waste, and improving overall operational efficiency.
          prevent overstocking, and reduce losses.

          <br /><br />
          
        </p>
      </motion.div>
    </div>
  );
}

export default Home;
