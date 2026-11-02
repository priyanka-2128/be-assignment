const express = require("express");

const app = express();

const authRoutes = require("./routes/authRoutes");

// Middleware
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static("public"));

// API routes
app.use("/api", authRoutes);

// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});