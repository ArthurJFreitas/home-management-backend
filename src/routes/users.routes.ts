import { Router, Request, Response } from "express";
import { CreateUser, DeleteUser, ListOneUser, ListUsers, UpdateUser} from '../controllers/user'

const userRouter = Router();

userRouter.post("/new", CreateUser)

userRouter.get('/', ListUsers)
userRouter.get('/:id', ListOneUser)
userRouter.put('/:id', UpdateUser)
userRouter.delete('/:id', DeleteUser)

export default userRouter;
