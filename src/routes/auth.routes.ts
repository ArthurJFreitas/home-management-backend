import { Router} from "express";
import {Login } from '../controllers/auth'

const authRouter = Router();

authRouter.post('/', Login )


export default authRouter;
