import { Router, Request, Response } from "express";
import { CreateHome, DeleteHome } from '../controllers/home'

const homeRouter = Router();

homeRouter.post("/new", CreateHome)
homeRouter.delete("/delete", DeleteHome)


export default homeRouter;
