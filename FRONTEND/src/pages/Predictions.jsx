import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Predictions = () => {
  const [formData, setFormData] = useState({
    day: "",
    month: "",
    year: "",
    product_id: "",
    stock_level: "",
  });

  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setPrediction(data.predicted_units_sold);
    } catch (err) {
      setError("Failed to fetch prediction. Please try again.");
      console.error("API Error:", err.message);
    }
  };

  return (
    <div
      className="container mt-5"
      style={{
        background: "linear-gradient(90deg, #0f2027, #203a43, #2c5364)",
        color: "white",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2 className="text-center" style={{textShadow: "0px 4px 5px rgba(0, 255, 255, 0.3)"}}>Sales Prediction</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Day:</label>
          <input
            type="number"
            className="form-control"
            name="day"
            value={formData.day}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Month:</label>
          <input
            type="number"
            className="form-control"
            name="month"
            value={formData.month}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Year:</label>
          <input
            type="number"
            className="form-control"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Product ID:</label>
          <input
            type="number"
            className="form-control"
            name="product_id"
            value={formData.product_id}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Stock Level:</label>
          <input
            type="number"
            className="form-control"
            name="stock_level"
            value={formData.stock_level}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Predict
        </button>
      </form>

      {prediction !== null && (
        <div className="alert alert-success mt-3">
          <strong>Predicted Sales:</strong> {prediction}
        </div>
      )}

      {error && (
        <div className="alert alert-danger mt-3">
          {error}
        </div>
      )}
    </div>
  );
};

export default Predictions;
