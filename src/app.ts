import express, { Request, Response } from "express";
// Use NextFunction for middlewares
import api from "./router/api";

const app = express();
const PORT = 8080;

app.use("/api", api);

app.listen(PORT, () => {
  console.log(`✅ Server listening on port: ${PORT}`);
});
