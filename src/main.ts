import express from "express";
import dotenv from "dotenv";
import publicApi from "./routes/public-api";
import { errorMiddleware } from "./error/error-middleware";
import { PORT } from "./utils/env-util";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api", publicApi);

app.get("/", (_req, res) => {
  res.send("Restaurant Manager API is running");
});

app.use((req, res, next) => {
  res.status(404).json({
    status: "error",
    message: "Route not found",
  });
});

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
