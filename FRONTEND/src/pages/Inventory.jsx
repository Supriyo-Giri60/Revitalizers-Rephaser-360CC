import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Inventory() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [forecastData, setForecastData] = useState({});
  const [newItem, setNewItem] = useState({
    id: "",
    itemName: "",
    category: "",
    stockLeft: "",
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch("http://localhost:5000/api/item/")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
        fetchDemandForecast(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  };

  const fetchDemandForecast = (products) => {
    fetch("http://localhost:5000/api/item/predict-demand/${id}", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ products }),
    })
      .then((response) => response.json())
      .then((data) => {
        setForecastData(data);
      })
      .catch((error) => console.error("Error fetching demand forecast:", error));
  };

  const addNewItem = () => {
    fetch("http://localhost:5000/api/item/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((response) => response.json())
      .then(() => {
        setNewItem({ id: "", itemName: "", category: "", stockLeft: "" });
        fetchProducts();
      })
      .catch((error) => console.error("Error adding new item:", error));
  };

  const updateStock = (id, newStockLeft) => {
    fetch(`http://localhost:5000/api/item/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ stockLeft: newStockLeft }),
    })
      .then((response) => response.json())
      .then(() => {
        setProducts(products.map((product) =>
          product.id === id ? { ...product, stockLeft: newStockLeft } : product
        ));
        fetchDemandForecast(products);
      })
      .catch((error) => console.error("Error updating stock:", error));
  };

  const deleteItem = (id) => {
    fetch(`http://localhost:5000/api/item/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setProducts(products.filter((product) => product.id !== id));
      })
      .catch((error) => console.error("Error deleting item:", error));
  };

  return (
    <div className="container-fluid d-flex flex-column align-items-center py-5" style={{
      minHeight: "100vh",
      background: "linear-gradient(90deg, #0f2027, #203a43, #2c5364)",
      color: "#ffffff"
    }}>
      <h2 className="mb-4 text-center" style={{ textShadow: "0px 0px 15px rgba(0, 255, 255, 0.8)" }}>Inventory Management</h2>

      <div className="mb-4 w-50">
        <h4>Add New Item</h4>
        <input type="text" className="form-control mb-2" placeholder="ID" value={newItem.id} onChange={(e) => setNewItem({ ...newItem, id: e.target.value })} />
        <input type="text" className="form-control mb-2" placeholder="Item Name" value={newItem.itemName} onChange={(e) => setNewItem({ ...newItem, itemName: e.target.value })} />
        <input type="text" className="form-control mb-2" placeholder="Category" value={newItem.category} onChange={(e) => setNewItem({ ...newItem, category: e.target.value })} />
        <input type="number" className="form-control mb-2" placeholder="Stock Quantity" value={newItem.stockLeft} onChange={(e) => setNewItem({ ...newItem, stockLeft: e.target.value })} />
        <button className="btn btn-success w-100" onClick={addNewItem}>Add Item</button>
      </div>

      {loading ? (
        <p>Loading products...</p>
      ) : (
        <table className="table table-dark table-striped w-75">
          <thead>
            <tr>
              <th>ID</th>
              <th>Item Name</th>
              <th>Category</th>
              <th>Stock Left</th>
              <th>Demand Forecast</th>
              <th>Update Stock</th>
              <th>Delete Item</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.itemName}</td>
                <td>{product.category}</td>
                <td>{product.stockLeft}</td>
                <td>{forecastData[product.id] || "Loading..."}</td>
                <td>
                  <input type="number" className="form-control" defaultValue={product.stockLeft} onBlur={(e) => updateStock(product.id, parseInt(e.target.value) || product.stockLeft)} />
                </td>
                <td>
                  <button className="btn btn-danger" onClick={() => deleteItem(product.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Inventory;
