import { Router } from "express";
import authRouter from "./auth.routes";
import homesRouter from "./homes.routes";
import userRoutes from "./users.routes"

const routes = Router();

routes.use("/homes", homesRouter);
routes.use('/users', userRoutes)
routes.use("/login", authRouter)

export default routes;
