import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import PostRouter from "./routes/Posts.js";
import GenerateImageRouter from "./routes/GenerateImage.js";
import { createError } from "./error.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: ["https://aiimage-generators.netlify.app"], // ✅ your Netlify frontend
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json({ limit: "200mb" })); // ✅ Required for JSON body parsing
app.use(express.urlencoded({ extended: true, limit: "200mb" }));

// Routes
app.use("/api/post", PostRouter);
app.use("/api/generateImage", GenerateImageRouter);


app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello MERNSTACK Developers!" });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("GLOBAL ERROR:", err.message);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ Failed to connect to DB", err);
    process.exit(1);
  }
};

const startServer = async () => {
  await connectDB();
  app.listen(8080, () => console.log("🚀 Server started on port 8080"));
};

startServer();