import { Router, Request, Response } from "express";
import { CreateHome, DeleteHome, ListHomes, ListOneHome } from '../controllers/home'

const homeRouter = Router();

homeRouter.post("/new", CreateHome)
homeRouter.delete("/delete", DeleteHome)
homeRouter.get("/", ListHomes)
homeRouter.get("/:id", ListOneHome)


export default homeRouter;
