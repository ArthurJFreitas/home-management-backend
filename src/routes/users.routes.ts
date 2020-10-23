import { Router, Request, Response } from "express";
import { CreateUser, DeleteUser, ListOneUser, ListUsers, UpdateUser } from '../controllers/user'
import { Authenticator } from '../middlewares/authenticator'

const userRouter = Router();

userRouter.post("/new", CreateUser)

userRouter.get('/', Authenticator, ListUsers)
userRouter.get('/:id', Authenticator, ListOneUser)
userRouter.put('/:id', Authenticator, UpdateUser)
userRouter.delete('/:id', Authenticator, DeleteUser)

export default userRouter;
