import {Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'
import { getRepository } from 'typeorm';
import { Users } from '../models/user';

export const Authenticator = async(req: Request,res: Response, next: NextFunction) => {
    const bearer: any = req.headers['authorization']
    const token = bearer?.split(' ');

   const bearerToken = token ? token[1] : ''


    try {
        jwt.verify(bearerToken, process.env.SECRET_KEY || '')
        next()
    }
    catch {
        res.status(403).json("Token inválido");
    }

   

}