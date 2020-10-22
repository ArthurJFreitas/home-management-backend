import { Router } from "express";
import homesRouter from "./homes.routes";
import userRoutes from "./users.routes"

const routes = Router();

routes.use("/homes", homesRouter);
routes.use('/users', userRoutes)

export default routes;
