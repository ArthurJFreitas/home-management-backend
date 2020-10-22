import { json, Request, Response } from 'express'
import { Homes } from '../../models/home'
import { getRepository } from 'typeorm'

export const CreateHome = async (req: Request, res: Response): Promise<Response> => {
    const newHome = await getRepository(Homes).create(req.body)
    const results = await getRepository(Homes).save(newHome)
    return res.status(200).json(results)
}  

export const DeleteHome = async(req: Request, res: Response): Promise<Response> => {
    const homeName = await getRepository(Homes).findOne({where: {id: req.params.id}})
    console.log(homeName)
    const results = await getRepository(Homes).delete(req.params.id)

    return res.status(200).json({message: `A casa ${homeName?.name} foi deletada com sucesso`})
}

export const ListHomes = async(req: Request, res: Response):Promise<Response> => {
    const results = await getRepository(Homes).find()
    return res.status(200).json(results)
}

export const ListOneHome = async(req: Request, res: Response): Promise<Response> => {  
    try {
        const results = await getRepository(Homes).findOne(req.params.id)
        return res.status(200).json(results)
    }
    catch {
        return res.status(404).json({error: "Essa casa não existe!"})
    }
}

export const UpdateHome = async(req: Request, res: Response): Promise<Response> => {
    const home = await getRepository(Homes).findOne({where: {id: req.params.id}})
    if(home){
        // const merge = await getRepository(Homes).merge(home, req.body)
        // const result = await getRepository(Homes).save(merge)
        const newHome = {...home, ...req.body}
        const result = await getRepository(Homes).save(newHome)
        return res.status(200).json(result)
    }
    return res.status(304).json('Usuário não existe')   
}