import { Request, Response } from 'express'
import { Homes } from '../../models/home'
import { getRepository } from 'typeorm'

export const CreateHome = async (req: Request, res: Response): Promise<Response> => {
    const newHome = await getRepository(Homes).create(req.body)
    const results = await getRepository(Homes).save(newHome)
    return res.status(200).json(results)
}  

export const DeleteHome = async(req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(Homes).delete(req.body.id)
    return res.status(200).json(results)
}