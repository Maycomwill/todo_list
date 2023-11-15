import express, { Request, Response } from "express";
import rootRouter from './routes/index'
import userRouter from "./routes/user/index";

const app = express();
const port = 3334;

//POST, GET, PUT (PATCH), DELETE
//CREATE, READ, UPDATE, DELETE
app.use(rootRouter)
app.use(userRouter)

app.listen(port, () => {
  console.log("O servidor está rodando no local http://localhost:3334/ 👨🏽‍💻");
});
