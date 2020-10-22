import { Router, Request, Response } from "express";
import { CreateUser} from '../controllers/user'

const userRouter = Router();

userRouter.post("/new", CreateUser)



export default userRouter;
