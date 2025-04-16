import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import userRoute from "./routes/userRoute.js";
import formRoutes from "./routes/formRoutes.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

//  Connect to MongoDB
connectDB();

//  Middleware
app.use(cors());
app.use(bodyParser.json());

// API Routes
app.use("/api/users", userRoute);
app.use("/api/submitForm", formRoutes);

// Start  Server

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
