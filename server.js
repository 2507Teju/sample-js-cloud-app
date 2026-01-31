const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Root endpoint
app.get("/", (req, res) => {
  res.send("🚀 Sample JavaScript app deployed on the cloud!");
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
