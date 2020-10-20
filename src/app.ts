import express from "express";
import cors from "cors";
import routes from "./routes";
import { createConnection } from "typeorm";

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

createConnection();

app.get("/", (req, res) => {
  res.send("VAI TOMA NO CU PYTHON");
});

export default app;
