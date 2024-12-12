require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

// Health Check
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

const PORT = process.env.API_PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
