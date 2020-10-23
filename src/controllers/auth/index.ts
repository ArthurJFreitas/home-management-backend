import { Request,Response } from 'express'
import { getRepository } from 'typeorm'
import { Users } from '../../models/user'
import * as jwt from 'jsonwebtoken'

export const Login = async(req: Request, res: Response) => {
    
    const {
        email,
        password
    } = req.body
    if(!email || !password) {
        return res.status(400).json({error: "Invalido"})
    }

    try {
        const user = await getRepository(Users).findOne({where:{email:req.body.email}})
        if(!user) {
            return res.status(401).json({error: "E-mail invalido"})
        }
        if(!user?.checkDecryptedPassword(password)) {
            
            return res.status(401).json({error: "Senha inválida"})
        }
        const token = jwt.sign({email: user.email, id:user.id}, process.env.SECRET_KEY || '', {expiresIn: '1h'})
        
        return res.status(200).json({token })
        
    }
    catch {
        return res.status(401).json({error: "Dados inválidos"})
    }
    
    
}

