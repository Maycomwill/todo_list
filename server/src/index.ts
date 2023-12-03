import express, { Request, Response } from "express";
import rootRouter from './routes/index'
import userRouter from "./routes/user/index";
import bodyParser from 'body-parser'
import tarefasRouter from "./routes/tarefas";
import cors from 'cors'

const app = express();
const port = 3334;


//POST, GET, PUT (PATCH), DELETE
//CREATE, READ, UPDATE, DELETE
/* app.use(
  cors({
    origin: "*",
    allowedHeaders: ["content-type", "Access-Control-Allow-Origin", "Access-Control-Allow-Headers"],
    optionsSuccessStatus: 200,
    methods: ["GET", "POST", "PUT", "DELETE"]
  })
); */

const allowedOriginsArray = ["*"]

app.all("/*", (req, res, next) => {
  // Return only one origin from your allowed origins
  const origin = req.headers.origin || "";
  const exactOrigin = allowedOriginsArray.indexOf(origin) >= 0 ? origin : allowedOriginsArray[0];
  res.header("Access-Control-Allow-Origin", exactOrigin);
  res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With,Content-Type"
      // add other headers you want here
  );
  next()
});


app.use(bodyParser.json())
app.use(rootRouter)
app.use(userRouter)
app.use(tarefasRouter)

app.listen(port, () => {
  console.log("O servidor está rodando no local http://localhost:3334/ 👨🏽‍💻");
});
