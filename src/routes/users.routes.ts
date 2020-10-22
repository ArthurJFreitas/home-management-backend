import { Router, Request, Response } from "express";
import { CreateUser, ListOneUser, ListUsers} from '../controllers/user'

const userRouter = Router();

userRouter.post("/new", CreateUser)

userRouter.get('/', ListUsers)
userRouter.get('/:id', ListOneUser)

export default userRouter;
