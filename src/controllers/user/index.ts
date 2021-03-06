import { json, Request, Response } from 'express'
import { Users } from '../../models/user'
import { getRepository } from 'typeorm'


export const CreateUser = async (req: Request, res: Response): Promise<Response> => {
    const {
        name,
        email,
        phone,
        password,
    } = req.body

    const user = new Users()
    user.name = name
    user.email = email
    user.phone = phone
    user.password = password
    user.hashPassword()
  
    const emailExists = await getRepository(Users).findOne({where:{email: email}})
   

    if(emailExists) {
        return res.status(409).json({error : "E-mail já cadastrado!"})
    }

    const phoneExists = await getRepository(Users).findOne({where:{phone:phone}})

    if(phoneExists) {
        return res.status(409).json({error : "Telefone já cadastrado!"})
    }
    
    await getRepository(Users).save(user)

    return res.status(200).json({message: "Usuário cadastrado com sucesso!"})
}

export const ListUsers = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(Users).find()
    return res.status(200).json(results)
}

export const ListOneUser = async (req: Request, res: Response): Promise<Response> => {

    try {
        const results = await getRepository(Users).find({where:{id:req.params.id}})
        return res.status(200).json(results)
    }
    catch {
        return res.status(404).json({error: "Usuário não existe"})
    }
}

export const UpdateUser = async (req: Request, res: Response): Promise<Response> => {
   try {
    const oldUser = await getRepository(Users).findOne({where:{id:req.params.id}})
    const newUser = {...oldUser, ...req.body}
    await getRepository(Users).save(newUser)
    return res.status(200).json(newUser)
   }
   catch {
    return res.status(404).json({error: "Usuário não existe"})
   }
}

export const DeleteUser = async(req: Request, res: Response): Promise<Response> => {
    try {
        const user = await getRepository(Users).findOne({where:{id:req.params.id}})

        if(user) {
            await getRepository(Users).delete(req.params.id)
            return res.status(200).json({message: "Usuário deletado com sucesso!"})
        }
        return res.status(404).json({error: "Usuário não existe"})
    }
    catch {
        return res.status(404).json({error: "Erro"})
    }
}

