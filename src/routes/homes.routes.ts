import { Router, Request, Response } from "express";
import { CreateHome, DeleteHome, ListHomes, ListOneHome, UpdateHome } from '../controllers/home'
import { Authenticator } from '../middlewares/authenticator'
const homeRouter = Router();

homeRouter.post("/new", Authenticator,CreateHome)
homeRouter.delete("/delete/:id",Authenticator, DeleteHome)
homeRouter.get("/", Authenticator, ListHomes)
homeRouter.get("/:id", Authenticator,ListOneHome)
homeRouter.put("/:id",Authenticator, UpdateHome)


export default homeRouter;
