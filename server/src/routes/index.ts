import { Request, Response, Router } from "express";

const rootRouter = Router();

rootRouter.get("/", (req: Request,res: Response)=>{
    res.send("Hello Home")
})

export default rootRouter