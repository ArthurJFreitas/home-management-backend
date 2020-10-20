import { Router } from "express";
import homesRouter from "./homes.routes";

const routes = Router();

routes.use("/homes", homesRouter);

export default routes;
