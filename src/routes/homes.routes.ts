import { Router, Request, Response } from "express";
import { CreateHome } from '../controllers/home'

const homeRouter = Router();

homeRouter.post("/new", CreateHome)



export default homeRouter;
