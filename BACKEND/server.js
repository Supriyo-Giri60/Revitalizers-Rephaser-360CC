require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes/items.routes.js");
const connectDB = require("./DB/connectDB.js");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

connectDB();
app.use("/api/item", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
