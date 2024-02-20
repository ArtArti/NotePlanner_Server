const express = require("express");
const app = express();
const authRouter = require("./router/authRouter");
const dbconnect = require("./Config/databaseConfig");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Connect to the database
dbconnect();

// Apply CORS middleware
app.use(
  cors({
    origin:["https://note-planner-client.vercel.app"], 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true,
  })
)

// Use built-in and third-party middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Define routes
app.use("/api/auth/", authRouter);

// Default route handler
app.get("/", (req, res) => {
  res.status(200).json({ data: "jwtaut Server" });
});

module.exports = app;
