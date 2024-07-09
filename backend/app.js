import express from "express";
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
import userRoutes from "./routes/userRoutes.js";
app.use("/api/v1/users", userRoutes);

// Error handling
app.use(notFound);
app.use(errorHandler);

export default app;
