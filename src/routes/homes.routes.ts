import { Router, Request, Response } from "express";

const homeRouter = Router();

homeRouter.post("/new", (req: Request, res: Response) => {
  const { name, ownerId } = req.body;

  res.json({ name, ownerId });
  console.log(name, ownerId);
});

export default homeRouter;
