import { Router, Request, Response } from "express";
import { CreateHome, DeleteHome, ListHomes } from '../controllers/home'

const homeRouter = Router();

homeRouter.post("/new", CreateHome)
homeRouter.delete("/delete", DeleteHome)
homeRouter.get("/", ListHomes)


export default homeRouter;
