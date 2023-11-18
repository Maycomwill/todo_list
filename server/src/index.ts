import express, { Request, Response } from "express";
import rootRouter from './routes/index'
import userRouter from "./routes/user/index";
import bodyParser from 'body-parser'
import tarefasRouter from "./routes/tarefas";

const app = express();
const port = 3334;

//POST, GET, PUT (PATCH), DELETE
//CREATE, READ, UPDATE, DELETE
app.use(bodyParser.json())
app.use(rootRouter)
app.use(userRouter)
app.use(tarefasRouter)

app.listen(port, () => {
  console.log("O servidor está rodando no local http://localhost:3334/ 👨🏽‍💻");
});
