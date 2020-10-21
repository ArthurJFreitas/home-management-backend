import { Router, Request, Response } from "express";
import { CreateHome, DeleteHome, ListHomes, ListOneHome, UpdateHome } from '../controllers/home'

const homeRouter = Router();

homeRouter.post("/new", CreateHome)
homeRouter.delete("/delete/:id", DeleteHome)
homeRouter.get("/", ListHomes)
homeRouter.get("/:id", ListOneHome)
homeRouter.put("/:id", UpdateHome)


export default homeRouter;
