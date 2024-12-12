require("dotenv").config();
const express = require("express");
const db = require("./utils/database");

const app = express();
app.use(express.json());

// Health Check
app.get("/", async (req, res) => {
  try {
    const result = await db.raw("SELECT 1 + 1 AS result");
    res.send(`Backend is running! DB Test Result: ${result[0][0].result}`);
  } catch (err) {
    res.status(500).send("Database connection failed: " + err.message);
  }
});

const PORT = process.env.API_PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
