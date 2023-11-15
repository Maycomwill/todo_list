import { Request, Response, Router } from "express";

const userRouter = Router();

userRouter.get("/user", (req: Request, res: Response)=>{
    res.status(200).send("Hello User")
})

userRouter.post("/user", (req:Request, res:Response)=>{
    res.status(201).send("Usuário criado")
})

userRouter.put("/user", (req:Request, res:Response)=>{
    res.status(200).send("Usuário alterado")
})

userRouter.delete("/user", (req:Request, res:Response)=>{
    res.status(200).send("Usuário deletado")
})

export default userRouter