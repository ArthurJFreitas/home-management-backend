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
  
    console.log(user)


    const results = await getRepository(Users).save(user)

    return res.status(200).json(results)
}